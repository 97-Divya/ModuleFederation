// movies/src/store/useBookingStore.ts
import { create } from "zustand";

export interface Booking {
  id: string;
  movieId: number;
  title: string;
  poster?: string;
  bookedAt: string; // ISO date
}

interface BookingState {
  bookings: Booking[];
  addBooking: (b: Omit<Booking, "id" | "bookedAt">) => Booking;
  loadFromStorage: () => void;
  clearAll: () => void;
}

const STORAGE_KEY = "mfe_bookings_v1";

const readFromStorage = (): Booking[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Booking[] : [];
  } catch {
    return [];
  }
};

const writeToStorage = (bookings: Booking[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  // dispatch cross-window/event bus note
  window.dispatchEvent(
    new CustomEvent("bookings:updated", { detail: { bookings } })
  );
};

const useBookingStore = create<BookingState>((set, get) => ({
  bookings: readFromStorage(),

  addBooking: ({ movieId, title, poster }) => {
    const newBooking: Booking = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      movieId,
      title,
      poster,
      bookedAt: new Date().toISOString(),
    };
    const updated = [...get().bookings, newBooking];
    set({ bookings: updated });
    writeToStorage(updated);
    return newBooking;
  },

  loadFromStorage: () => {
    set({ bookings: readFromStorage() });
  },

  clearAll: () => {
    set({ bookings: [] });
    writeToStorage([]);
  },
}));

export default useBookingStore;
export { STORAGE_KEY };

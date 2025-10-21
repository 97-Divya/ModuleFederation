// booking/src/store/useBookingStore.ts
import { create } from "zustand";

interface BookingState {
  userName: string;
  setUserName: (name: string) => void;
}

const useBookingStore = create<BookingState>((set) => ({
  userName: "",
  setUserName: (name) => set({ userName: name }),
}));

export default useBookingStore;

// booking/src/global.d.ts
declare module "home/useMovieStore" {
  import { UseBoundStore } from "zustand";
import { StateSelector } from "zustand";

  export interface Movie {
    id: number;
    title: string;
    image?: string;
    rating?: string;
  }

  interface MovieState {
    cart: Movie[];
    selectedMovie: Movie | null;
    addToCart: (movie: Movie) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    setSelectedMovie: (movie: Movie) => void;
  }


const useMovieStore: UseBoundStore<MovieState, StateSelector<MovieState, any>>;
  export default useMovieStore;
}
// booking/src/types/global.d.ts
declare global {
  interface Window {
    __FEDERATION__?: boolean;
  }
}
export {};

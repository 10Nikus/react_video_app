import { create } from "zustand";

interface VideoStore {
  query: string;
  videos: any[];
  isLoading: boolean;
  setVideos: (videos: any[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setQuery: (query: string) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  query: "",
  videos: [],
  isLoading: false,
  setVideos: (videos) => set({ videos }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setQuery: (query) => set({ query }),
}));

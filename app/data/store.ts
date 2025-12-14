import { create } from "zustand";

interface VideoStore {
  videos: any[];
  isLoading: boolean;
  setVideos: (videos: any[]) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  videos: [],
  isLoading: false,
  setVideos: (videos) => set({ videos }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

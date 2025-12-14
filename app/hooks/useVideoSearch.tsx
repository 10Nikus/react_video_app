import { fetchVideos } from "../services/api";
import { useVideoStore } from "../data/store";

export function useVideoSearch() {
  const setStoredVideos = useVideoStore((state) => state.setVideos);
  const setIsLoading = useVideoStore((state) => state.setIsLoading);

  const search = async (query: string) => {
    if (!query.trim()) return;
    setIsLoading(true);

    try {
      const results = await fetchVideos(query);
      setStoredVideos(results);
    } catch (err) {
      console.error(
        err instanceof Error ? err.message : "Failed to fetch videos"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { search };
}

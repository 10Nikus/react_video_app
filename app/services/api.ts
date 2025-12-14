const KEY = process.env.EXPO_PUBLIC_YOUTUBE_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function fetchVideos(query: string) {
  const url = `${BASE_URL}/search?part=snippet&q=${encodeURIComponent(
    query
  )}&type=video&key=${KEY}&maxResults=10&order=viewCount`;
  const response = await fetch(url);
  const data = await response.json();

  return data.items;
}

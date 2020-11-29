// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=3c05b69d3c594ed789b0e8ff17d4e3bc";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}

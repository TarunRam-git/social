export async function FetchAlbums() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed...");
  return response.json();
}

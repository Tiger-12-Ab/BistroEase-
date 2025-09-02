const SERVER_URL = "https://bistroease-backend.onrender.com";

export const getImageUrl = (url?: string | null) => {
  if (!url) return "/placeholder.jpg";
  if (url.startsWith("http")) return url;
  return `${SERVER_URL}${url}`;
};
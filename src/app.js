window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  console.getElementbyId("title") = parsedUrl.searchParams.get('title'));
  console.getElementbyId("text") = parsedUrl.searchParams.get('text'));
  console.getElementbyId("url") =  parsedUrl.searchParams.get('url'));
});

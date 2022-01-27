window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  document.getElementbyId('title') = parsedUrl.searchParams.get('title');
  document.getElementbyId('text') = parsedUrl.searchParams.get('text');
  document.getElementbyId('url') =  parsedUrl.searchParams.get('url');
});

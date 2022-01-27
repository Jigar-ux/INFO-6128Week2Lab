window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  document.getElementById('title') = parsedUrl.searchParams.get('title');
  document.getElementById('text') = parsedUrl.searchParams.get('text');
  document.getElementById('url') =  parsedUrl.searchParams.get('url');
});

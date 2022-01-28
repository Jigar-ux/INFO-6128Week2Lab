window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  document.getElementById('title').textContent = parsedUrl.searchParams.get('title');
  document.getElementById('text').textContent = parsedUrl.searchParams.get('text');
  document.getElementById('text').textContent = parsedUrl.searchParams.get('url');
});


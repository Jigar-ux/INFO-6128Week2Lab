window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    document.getElementById('title').value = title;
    document.getElementById('text').value = text;
    document.getElementById('url').value = url;
  });

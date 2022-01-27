window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);
    // searchParams.get() will properly handle decoding the values.
    console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
    console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
    console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
  });

  self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    // If this is an incoming POST request for the
    // registered "action" URL, respond to it.
    if (event.request.method === 'POST' &&
        url.pathname === '/bookmark') {
      event.respondWith((async () => {
        const formData = await event.request.formData();
        const link = formData.get('link') || '';
        const responseUrl = await saveBookmark(link);
        return Response.redirect(responseUrl, 303);
      })());
    }
  });
window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  console.getElementbyId("title").value = "best Movie site";
  console.getElementbyId("text").value = "Hey try this wonderful site for latest movies";
  console.getElementbyId("url").value = "https://ww1.123moviesfree.net/";
});

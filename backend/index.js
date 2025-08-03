addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const value = await KV_STORAGE.get("init");
  return new Response(`Mirinda AI Backend: ${value || "No KV data"}`, {
    status: 200,
  });
}

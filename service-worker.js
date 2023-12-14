const expectedCache = "static-v2";
const cacheName = "static-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Service Worker: Caching important offline files");
      return cache.addAll([
        "/error404.html", // Cambia por la ruta correcta de tu página de error 404
        "../images/404.svg",
        "/index.html",
        "../css/stylesheet.css",
        "../images/yes.gif",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (!expectedCache.includes(cache)) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("push", (pushing) => {
  if (pushing.data) {
    pushdata = JSON.parse(pushing.data.text());
    console.log("Service Worker: I received this:", pushdata);
    if (pushdata["title"] != "" && pushdata["message"] != "") {
      const options = { body: pushdata["message"] };
      self.registration.showNotification(pushdata["title"], options);
      console.log("Service Worker: I made a notification for the user");
    } else {
      console.log(
        "Service Worker: I didn't make a notification for the user, not all the info was there :("
      );
    }
  }
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log(
          "Service Worker: Fetching resource from cache " + event.request.url
        );
        return response;
      }

      console.log(
        "Service Worker: Fetching resource " + event.request.url + " online"
      );
      return fetch(event.request.url)
        .then((response) => {
          console.log(
            "Service Worker: Resource " +
              event.request.url +
              " not available in cache"
          );
          return caches.open("dynamic").then((cache) => {
            console.log(
              "Service Worker: Caching (new) resource " + event.request.url
            );
            // cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          console.log(
            "Service Worker: Fetching online failed. Responding with offline page."
          );
          return caches.match("/error404.html"); // Cambia por la ruta correcta de tu página de error 404
        });
    })
  );
});

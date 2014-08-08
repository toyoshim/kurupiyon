chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    "static/main.html",
    {
      id: "main",
      bounds: {
        width: 600,
        height: 570
      }
    }
  );
});

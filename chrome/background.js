chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    "static/index.html",
    {
      id: "main",
      bounds: {
        width: 600,
        height: 570
      }
    }
  );
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "clicked_browser_action") {
    var firstHref = "https://atharvakadlag.github.io";
    chrome.runtime.sendMessage({
      message: "open_new_tab",
      url: request.url,
    });
  }
});

const parseLink = (link) => {
  try {
    let args = link.split("?")[1].split("&");
    let params = {};
    for (const str of args) {
      params[str.split("=")[0]] = str.split("=")[1];
    }
    if ("list" in params) {
      return [
        "https://zen-watch-ak.herokuapp.com/playlist/" + params["list"],
        0,
      ];
    } else if ("v" in params) {
      return ["https://zen-watch-ak.herokuapp.com/video/" + params["v"], 0];
    }
  } catch {
    return ["", 1];
  }
};

let watch = document.getElementById("watch");

watch.onclick = (element) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    var activeTab = tabs[0];
    var [link, err] = parseLink(activeTab.url);
    if (!err) {
      chrome.tabs.create({ url: link });
      console.log("redirect failed");
    } else {
      console.log("invalid url");
    }
  });
};

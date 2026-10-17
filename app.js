const statusEl = document.getElementById("status");

function setStatus(text) {
  if (statusEl) statusEl.textContent = text;
}

async function registerSW() {
  if (!("serviceWorker" in navigator)) {
    setStatus("Service workers not supported in this browser.");
    return;
  }

  try {
    const reg = await navigator.serviceWorker.register("./sw.js");
    setStatus(reg.active ? "Service worker active (offline ready)." : "Service worker installed.");
  } catch (err) {
    console.error(err);
    setStatus("Service worker registration failed.");
  }
}

window.addEventListener("load", () => {
  setStatus(navigator.onLine ? "Online." : "Offline.");
  registerSW();
});

import * as React from "solid-react-compat";

function Avatar() {
  React.createEffect(() => {
    const iframeUrl = "https://evolvfit.readyplayer.me/";

    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event: any) {
      setTimeout(() => {
        console.log(event.origin);
        // Get URL to avatar
        if (iframeUrl.includes(event.origin)) {
          console.log(`Avatar URL: ${event.data}`);
          // document.querySelector(
          //   "#avatarUrl"
          // ).innerHTML = `Avatar URL: ${event.data}`;
        }
      }, 1000);
    }

    function makeAvatar() {
      let iframe = document.getElementById("iframe") as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement("iframe") as HTMLIFrameElement;
        document.body.appendChild(iframe);
      }
      iframe.id = "iframe";
      iframe.src = iframeUrl;
      iframe.className = "fixed left-0 top-0";
      iframe.allow = "camera *; microphone *";
    }

    makeAvatar();
  }, []);

  return null;
}

(function () {
  const SPEED_STEP = 0.25;
  const MIN_SPEED = 0.25;
  const MAX_SPEED = 5;

  function getVideo() {
    return document.querySelector("video");
  }

  document.addEventListener("keydown", (event) => {
    console.log("Pressed key " + event.key);

    const el = document.activeElement;
    if (
      el &&
      (
        el.tagName.toLowerCase() === "input" ||
        el.tagName.toLowerCase() === "textarea" ||
        el.isContentEditable === true
      )
    ) {
      return;
    }

    const video = getVideo();
    if (!video) return;

    switch (event.key.toLowerCase()) {
      case "d":
        video.playbackRate = Math.min(
          MAX_SPEED,
          video.playbackRate + SPEED_STEP
        );
        console.log("Speed:", video.playbackRate);
        break;

      case "s":
        video.playbackRate = Math.max(
          MIN_SPEED,
          video.playbackRate - SPEED_STEP
        );
        console.log("Speed:", video.playbackRate);
        break;

      case "r":
        video.playbackRate = 1.0;
        console.log("Speed reset to 1x");
        break;
    }
  });
})();

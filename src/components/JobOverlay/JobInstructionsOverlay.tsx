import { getAnalytics, logEvent } from "@firebase/analytics";
import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import "./JobInstructionsOverlay.scss";

function getJobWords(): HTMLElement[] {
  return Array.from(document.getElementsByClassName("job-title") as HTMLCollectionOf<HTMLElement>);
}

function moveInstructionsBox(): void {
  const overlayElement = document.getElementById("jobInstructionsOverlay");
  if (!overlayElement || overlayElement.classList.contains("hidden")) return;
  const jobWords = getJobWords();
  const boxEl = document.getElementById("jobInstructionsBox");
  const firstBox = jobWords[0]?.getClientRects()[0];
  const lastBox = jobWords[jobWords.length - 1]?.getClientRects()[0];
  if (!firstBox || !boxEl || !lastBox) return;
  boxEl.style.top = `${lastBox.top + lastBox.height + 10}px`;
  boxEl.style.left = `${firstBox.left}px`;
  boxEl.style.right = `${firstBox.left}px`;
  boxEl.style.display = "block";
}

export function JobInstructionsOverlay(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [hideButtonDisabled, setHideButtonDisabled] = useState(true);

  const localStorageSeenKey = "seenJobInstructions";

  useEffect(() => {
    window.addEventListener("resize", moveInstructionsBox);
    return () => window.removeEventListener("resize", moveInstructionsBox);
  }, []);

  const showOverlay = useCallback(() => {
    setVisible(true);
    window.scrollTo(0, 0);
    setTopElements(true);
    window.setTimeout(() => setHideButtonDisabled(false), 2000);
  }, [setVisible, setHideButtonDisabled]);

  useEffect(() => {
    const shouldShow = !localStorage.getItem(localStorageSeenKey);
    if (shouldShow) window.setTimeout(() => showOverlay(), 50);
  }, [showOverlay]);

  useEffect(() => {
    if (visible) moveInstructionsBox();
  }, [visible]);

  function setTopElements(onTop: boolean): void {
    const jobWords = getJobWords();
    jobWords.forEach((el) => {
      if (onTop) {
        el.style.zIndex = "10001";
        el.style.position = "relative";
        document.body.style.overflowY = "hidden";
      } else {
        el.style.removeProperty("z-index");
        el.style.removeProperty("position");
        document.body.style.removeProperty("overflow-y");
      }
    });
  }

  function hideOverlay(): void {
    setTopElements(false);
    setVisible(false);
    localStorage.setItem(localStorageSeenKey, "true");
    const analytics = getAnalytics();
    logEvent(analytics, "got_initial_instructions");
  }

  return (
    <div id="jobInstructionsOverlay" className={visible ? "" : "hidden"}>
      <div className="overlay"></div>
      <div id="jobInstructionsBox">
        <p>
          Hi there, Even though I have been focusing on web development lately, I'm also a skilled
          game developer. You can click any time on "Web" or "Game" to see some changes on the page
          content.
        </p>
        <div className="btn-container">
          <Button variant="text" onClick={hideOverlay} disabled={hideButtonDisabled}>
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobInstructionsOverlay;

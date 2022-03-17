import { useEffect } from "react";
import { FaPause, FaPlayCircle } from "react-icons/fa";
import { INFO, INFO_Poster } from "../../../videos/INFO_Videos";

import styles from "../../../styles/views/info/Info.module.css";

const Video = () => {
  // Making the video functional
  useEffect(() => {
    const videoHolder = document.getElementById("infoVideoHolder");
    const video = document.getElementById("infoVideo");
    const pB = document.getElementById("playButton");
    const pIcon = document.getElementById("pauseIcon");

    video.volume = 0.15;

    // Triggering playing and pausing
    function playVideo() {
      video.play();
      pB.style.display = "none";
      pIcon.classList.remove("deactive");
    }
    function pauseVideo() {
      video.pause();
      pB.style.display = "grid";
      pIcon.classList.toggle("deactive");
    }

    // This will check if the video is playing/paused, and it will do the opposite
    function checkingVideoState() {
      if (video.paused) {
        playVideo();
      } else {
        pauseVideo();
      }
    }

    // Play/Pause video when clicking
    videoHolder.addEventListener("click", () => {
      checkingVideoState();
    });

    // Displaying/hiding pause icon
    videoHolder.addEventListener("mouseenter", () => {
      if (!video.paused) {
        pIcon.classList.remove("deactive");
      }
    });
    videoHolder.addEventListener("mouseleave", () => {
      pIcon.classList.toggle("deactive");
    });

    // Simulate keyboard SPACE bar play/pause
    //* Also checks if the search is not open so it does not interfer with what the user types in
    document.body.addEventListener("keypress", (e) => {
      if (e.keyCode == 32) {
        if (!sessionStorage.getItem("Search Toggled.")) {
          checkingVideoState();
          e.preventDefault();
        } else {
          e.preventDefault();
        }
      }
    });
  }, []);

  return (
    <div id={styles.video}>
      <div className={`${styles.info_video_cnt} AOS_Item`} data-aos="fade-left">
        <div
          className={`${styles.info_video_holder} page-transition`}
          id="infoVideoHolder"
        >
          <video
            data-src={INFO}
            className="lazyload"
            id="infoVideo"
            poster={INFO_Poster}
          ></video>

          <span id="playButton" className="page-transition">
            <FaPlayCircle />
          </span>
          <span
            id="pauseIcon"
            className={`${styles.pause_icon} page-transition`}
          >
            <FaPause />
          </span>
        </div>

        <a
          href="https://www.youtube.com/embed/L1nVYkS6H3U"
          className="page-transition"
        >
          Video Source
        </a>
      </div>
    </div>
  );
};

export default Video;

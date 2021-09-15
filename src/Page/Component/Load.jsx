import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
const Load = () => {
  useEffect(() => {
    var tl = anime.timeline({
      easing: "easeInOutSine",
      duration: 1500,
    });
    tl.add({
      targets: ".load-icon>path",
      strokeDashoffset: [anime.setDashoffset, 0],
      delay: function (el, i) {
        return i * 250;
      },
      direction: "reverse",
      loop: true,
    })
      .add(
        {
          targets: ".load-icon>path",
          fill: "#fff",
        },
        1000
      )
      .add(
        {
          targets: ".load",
          opacity: 0,
          duration: 600,
          complete: function() {
            document.querySelector('.load').style.display = 'none';
          },
        },
        3000
      );
  });
  return (
    <div className="load">
      <svg
        width="calc(60px + 1.5vw)"
        viewBox="0 0 100 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="load-icon"
      >
        <path
          d="M29.0816 54.0262V49.035C29.0816 45.0595 32.3044 41.8367 36.2799 41.8367C40.2555 41.8367 43.4783 45.0595 43.4783 49.035V54.0262C43.4783 58.0017 40.2555 61.2245 36.2799 61.2245C32.3044 61.2245 29.0816 58.0017 29.0816 54.0262Z"
          // fill="white"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M53.2609 54.1593V7.06522C53.2609 3.16321 56.4241 0 60.3261 0C64.2281 0 67.3913 3.16321 67.3913 7.06522V54.1593C67.3913 58.0613 64.2281 61.2245 60.3261 61.2245C56.4241 61.2245 53.2609 58.0613 53.2609 54.1593Z"
          // fill="white"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M93.1123 61.2245H78.6269C74.8229 61.2245 71.7391 58.1407 71.7391 54.3367C71.7391 50.5327 74.8229 47.449 78.6269 47.449H93.1122C96.9162 47.449 100 50.5327 100 54.3367C100 58.1407 96.9163 61.2245 93.1123 61.2245Z"
          // fill="white"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 30.6122V53.6158C0 57.818 3.40653 61.2245 7.6087 61.2245C11.8109 61.2245 15.2174 57.818 15.2174 53.6158V38.1924C15.2174 37.6289 15.6742 37.172 16.2378 37.172H35.8617C40.0682 37.172 43.4783 33.7619 43.4783 29.5554C43.4783 25.3489 40.0682 21.9388 35.8616 21.9388H31.1224C31.1224 25.0383 28.6098 27.551 25.5102 27.551H15.2174V21.9388H8.67347C3.88325 21.9388 0 25.822 0 30.6122ZM15.2174 15.8163V10.2041H23.375H25.5102C28.6098 10.2041 31.1224 12.7168 31.1224 15.8163H35.5701C39.9377 15.8163 43.4783 12.2757 43.4783 7.90816C43.4783 3.54061 39.9377 0 35.5701 0H35.2041H22.449H8.92857C4.56101 0 1.02041 3.54061 1.02041 7.90816C1.02041 12.2757 4.56101 15.8163 8.92857 15.8163H15.2174Z"
          // fill="white"
          stroke="white"
          stroke-width="1.5"
        />
      </svg>
    </div>
  );
};

export default Load;

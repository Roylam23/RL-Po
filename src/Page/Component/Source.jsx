import { useEffect } from "react";
import { Icon } from "@iconify/react";
import anime from "animejs/lib/anime.es.js";
const Source = () => {
  useEffect(() => {
    anime({
      easing: "easeInOutSine",
      targets: ".sor",
      opacity: [0, 1],
      translateX: ["-20px", 0],
      delay: anime.stagger(500, { start: 5500 }),
    });
  });
  return (
    <div className="source-con">
      <span
        className="sor"
        onClick={() => window.open("https://github.com/Roylam23")}
      >
        <Icon icon="akar-icons:github-fill" width="calc(16px + 0.35vw)" />
      </span>
      <span className="sor">
        <Icon icon="akar-icons:instagram-fill" width="calc(16px + 0.35vw)" />
      </span>
      <span className="sor">
        <Icon icon="brandico:linkedin-rect" width="calc(16px + 0.35vw)" />
      </span>
    </div>
  );
};
export default Source;

import { gsap } from "gsap";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
const Source = () => {
  useEffect(() => {
    var d = 6;
    document.querySelectorAll(".sor").forEach((sor) => {
      gsap
        .fromTo(sor, 0.6, { opacity: 0, x: -20 }, { opacity: 1, x: 0 })
        .delay(d);
      d += 0.5;
    });
  });
  return (
    <div className="source-con">
      <span
        className="sor"
        onClick={() => window.open('https://github.com/Roylam23')}
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

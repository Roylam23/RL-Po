import { gsap } from "gsap";
import anime from "animejs/lib/anime.es.js";

const BtnClose = () => {
  anime({
    easing: "easeOutQuad",
    targets: ".option",
    opacity: 0,
    rotate: "180deg",
    duration: 350,
    complete: () => {
      document.querySelector(".option").style.display = "none";
    },
  });
  anime({
    easing: "easeOutQuad",
    targets: ".option-c",
    opacity: [0,1],
    rotate: "180deg",
    delay: 300,
    duration: 350,
    begin: () => {
      document.querySelector(".option-c").style.display = "block";
    },
  });
};

const BtnOpen = () => {
  anime({
    easing: "easeOutQuad",
    targets: ".option",
    opacity: 1,
    rotate: "-180deg",
    delay: 300,
    duration: 350,
    begin: () => {
      document.querySelector(".option").style.display = "block";
    },
  });
  anime({
    easing: "easeOutQuad",
    targets: ".option-c",
    opacity: 0,
    rotate: "-180deg",
    duration: 350,
    complete: () => {
      document.querySelector(".option-c").style.display = "none";
    },
  });
};

const MenuClose = () => {
  var menu = anime.timeline({
    easing: "easeOutQuad",
  });
  menu
    .add({
      targets: ".menu-option",
      duration: 425,
      opacity: 0,
      translateX: "50px",
      delay: anime.stagger(150, { direction: "reverse" }),
    })
    .add({
      targets: ".menu",
      duration: 1000,
      translateY: "-100%",
      opacity: 0,
    });
};

const Open = () => {
  console.log(window.screen.width);
  if (window.screen.width <= 768) {
    var menu = anime.timeline({
      easing: "easeOutQuad",
    });
    menu.add({
      targets: ".menu",
      duration: 650,
      translateY: 0,
      opacity: 1,
    });
    menu.add({
      targets: ".menu-option",
      duration: 550,
      opacity: [0, 1],
      translateX: ["50px", 0],
      delay: anime.stagger(250),
    });
    document.querySelectorAll(".menu-option").forEach((e) => {
      e.addEventListener("click", () => {
        BtnOpen();
        MenuClose();
      });
    });
  } else {
    menu = anime.timeline({
      easing: "easeOutQuad",
    });
    menu
      .add({
        targets: ".menu-option",
        duration: 0,
        translateX: 0,
        opacity: 1,
      })
      .add({
        targets: ".menu",
        duration: 0,
        translateY: 0,
      })
      .add({
        targets: ".menu",
        opacity: 1,
        translateX: [0,"-85px"],
        duration: 650,
      });
  }
  BtnClose();
};

const Close = () => {
  if (window.screen.width <= 768) {
    MenuClose();
  } else {
    gsap.to(".menu", 0.65, {
      ease: "Power1.easeOut",
      width: "auto",
      translateX: 0,
      opacity: "0",
      right: 30,
    });
  }
  BtnOpen();
};

const Nav = () => {
  return (
    <nav className="nav">
      <svg
        width="calc(40px + 1.5vw)"
        viewBox="0 0 100 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
      >
        <path
          d="M29.0816 54.0262V49.035C29.0816 45.0595 32.3044 41.8367 36.2799 41.8367C40.2555 41.8367 43.4783 45.0595 43.4783 49.035V54.0262C43.4783 58.0017 40.2555 61.2245 36.2799 61.2245C32.3044 61.2245 29.0816 58.0017 29.0816 54.0262Z"
          fill="white"
        />
        <path
          d="M53.2609 54.1593V7.06522C53.2609 3.16321 56.4241 0 60.3261 0C64.2281 0 67.3913 3.16321 67.3913 7.06522V54.1593C67.3913 58.0613 64.2281 61.2245 60.3261 61.2245C56.4241 61.2245 53.2609 58.0613 53.2609 54.1593Z"
          fill="white"
        />
        <path
          d="M93.1123 61.2245H78.6269C74.8229 61.2245 71.7391 58.1407 71.7391 54.3367C71.7391 50.5327 74.8229 47.449 78.6269 47.449H93.1122C96.9162 47.449 100 50.5327 100 54.3367C100 58.1407 96.9163 61.2245 93.1123 61.2245Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 30.6122V53.6158C0 57.818 3.40653 61.2245 7.6087 61.2245C11.8109 61.2245 15.2174 57.818 15.2174 53.6158V38.1924C15.2174 37.6289 15.6742 37.172 16.2378 37.172H35.8617C40.0682 37.172 43.4783 33.7619 43.4783 29.5554C43.4783 25.3489 40.0682 21.9388 35.8616 21.9388H31.1224C31.1224 25.0383 28.6098 27.551 25.5102 27.551H15.2174V21.9388H8.67347C3.88325 21.9388 0 25.822 0 30.6122ZM15.2174 15.8163V10.2041H23.375H25.5102C28.6098 10.2041 31.1224 12.7168 31.1224 15.8163H35.5701C39.9377 15.8163 43.4783 12.2757 43.4783 7.90816C43.4783 3.54061 39.9377 0 35.5701 0H35.2041H22.449H8.92857C4.56101 0 1.02041 3.54061 1.02041 7.90816C1.02041 12.2757 4.56101 15.8163 8.92857 15.8163H15.2174Z"
          fill="white"
        />
      </svg>
      <div className="menu">
        <a href="#home">
          <div className="menu-option m1">Home</div>
        </a>
        <a href="#about">
          <div className="menu-option m2">About</div>
        </a>
        <a href="#project">
          <div className="menu-option m3">Recent Project</div>
        </a>
        <a href="#contact">
          <div className="menu-option m4">Contact</div>
        </a>
      </div>
      {/* Option Menu Button */}
      <div className="btn-con">
        <svg
          className="option-c"
          width="calc(20px + 0.5vw)"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={Close}
        >
          <path
            d="M35.5 4.025L31.975 0.5L18 14.475L4.025 0.5L0.5 4.025L14.475 18L0.5 31.975L4.025 35.5L18 21.525L31.975 35.5L35.5 31.975L21.525 18L35.5 4.025Z"
            fill="white"
          />
        </svg>
        <svg
          className="option"
          width="calc(20px + 0.5vw)"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={Open}
        >
          <path
            d="M2.14286 0C0.959389 0 0 0.95939 0 2.14286C0 3.32632 0.95939 4.28571 2.14286 4.28571H32.8571C34.0406 4.28571 35 3.32632 35 2.14286C35 0.95939 34.0406 0 32.8571 0H2.14286ZM2.14286 12.8571C0.959389 12.8571 0 13.8165 0 15C0 16.1835 0.95939 17.1429 2.14286 17.1429H32.8571C34.0406 17.1429 35 16.1835 35 15C35 13.8165 34.0406 12.8571 32.8571 12.8571H2.14286ZM2.14286 25.7143C0.959389 25.7143 0 26.6737 0 27.8571C0 29.0406 0.95939 30 2.14286 30H32.8571C34.0406 30 35 29.0406 35 27.8571C35 26.6737 34.0406 25.7143 32.8571 25.7143H2.14286Z"
            fill="white"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Nav;

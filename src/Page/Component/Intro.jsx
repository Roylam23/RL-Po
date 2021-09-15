import bo from "../img/icon.jpg";
const Intro = () => {
  return (
    <>
      <div className="main-outer">
        <div className="main-con">
          <div className="main-l-con">
            <span className="hi">Hi, I'm</span>
            <span className="name">Roy Lam</span>
            <span className="title">Frontend Designer & Developer</span>
            <button className="btn-work">Let Work Together</button>
          </div>
          <div className="main-r-con">
            <div className="bo-con">
              <img className="bo" src={bo} alt="bo"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

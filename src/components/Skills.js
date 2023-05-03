import reactjs from "../assets/img/react-icon.svg";
import nextjs from "../assets/img/nextjs-icon.png";
import vuejs from "../assets/img/Vue-icon.png";
import dotnet from "../assets/img/dotnet.png";
import nodejs from "../assets/img/nodejs.png";
import expressjs from "../assets/img/Expressjs.png";
import flutter from "../assets/img/flutter.png";
import reactnative from "../assets/img/react-icon.svg";
import dart from "../assets/img/dart.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Below are the skills that I have learned recently. I always
                keep up-to-date to the recent technologies and committed to
                learning more.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactjs} alt="" />
                  <h5>React.js</h5>
                  <h6>Front-End</h6>
                </div>
                <div className="item">
                  <img src={nextjs} alt="" />
                  <h5>Next.js</h5>
                  <h6>Front-End</h6>
                </div>
                <div className="item">
                  <img src={vuejs} alt="" />
                  <h5>Vue.js</h5>
                  <h6>Front-End</h6>
                </div>
                <div className="item">
                  <img src={dotnet} alt="" />
                  <h5>.NET</h5>
                  <h6>Back-End</h6>
                </div>
                <div className="item">
                  <img src={nodejs} alt="" />
                  <h5>Node.js</h5>
                  <h6>Back-End</h6>
                </div>
                <div className="item">
                  <img src={expressjs} alt="" />
                  <h5>Express.js</h5>
                  <h6>Back-End</h6>
                </div>
                <div className="item">
                  <img src={reactnative} alt="" />
                  <h5>React Native</h5>
                  <h6>Mobile</h6>
                </div>
                <div className="item">
                  <img src={flutter} alt="" />
                  <h5>Flutter</h5>
                  <h6>Mobile</h6>
                </div>
                <div className="item">
                  <img src={dart} alt="" />
                  <h5>Dart</h5>
                  <h6>Mobile</h6>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

import radit from "../../assets/img/radit.jpg";
import theo from "../../assets/img/theo.jpg";
import Jonathan from "../../assets/img/Jonathan.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./People.css";

export const People = () => {
  const responsive = {
    superLargeDesktop: {
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
    <section className="people" id="people">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <h2 style={{ fontSize: '36px' }}>TESTIMONIALS</h2>
              <p>
                Below are some feedbacks from individuals who have worked with
                me :
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h6>
                    "One of Avicena's strongest skills is his ability to remain
                    objective even in the most challenging situations. He is
                    able to separate personal biases from facts and make
                    informed decisions that benefit everyone involved. His
                    approach to problem-solving is logical and thorough,
                    ensuring that all aspects of an issue are carefully
                    considered before a solution is implemented.
                  </h6>
                  <h6>
                    I highly recommend Muhammad Avicena for any position that
                    requires a supportive partner, an objective thinker, and a
                    skilled public speaker. I am confident that he will make a
                    valuable contribution."
                  </h6>
                  <div className="people">
                    <img src={radit} alt="radit" />
                    <h5>Radithya Airlangga</h5>
                    <h6>Front End Developer at Formulatrix Indonesia</h6>
                  </div>
                </div>
                <div className="item">
                  <h6>
                    "Having worked with Cena for the past two years made me
                    confident that he is a diligent individual. He has shown his
                    willingness to learn while giving his best on every task. He
                    is very open to self improvement and good at communicating
                    his ideas. I am certain that he'll be a wonderful asset for
                    any company he's in."
                  </h6>
                  <div className="people">
                    <img src={theo} alt="theo" />
                    <h5>Theo Gee</h5>
                    <h6>
                      Penultimate Information Technology @ SGU | Ex-Tokopedia
                    </h6>
                  </div>
                </div>
                <div className="item">
                  <h6>
                    "I highly recommend Kak Avicena as a mentor because not only
                    was his explanations easy to understand, but he was also
                    engaging to talk. The private class that he made helped me a
                    lot to purse my career as Software Engineer"
                  </h6>
                  <div className="people">
                    <img src={Jonathan} alt="jonathan" />
                    <h5>Suryateja Jonathan Gandha</h5>
                    <h6>Bachelor of Computer Science at BINUS University</h6>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
};

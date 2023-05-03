import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline, MdOutlineSchool, MdStars } from "react-icons/md";
import "./Aboutme.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import profile from "../../assets/img/profile.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  boxShadow: "none",
}));

const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1),
  textAlign: "left",
  color: "white",
  boxShadow: "none",
}));

export const AboutMe = () => {
  return (
    <>
      <section className="aboutme" id="aboutme">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="aboutme-bx wow zoomIn">
                <h2>About me</h2>
                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Item>
                        <div className="img-container">
                          <img src={profile} alt="profile" />
                          <h5>Muhammad Avicena Rahmadianto</h5>
                        </div>
                      </Item>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Item1>
                        <p>
                          Hello World ! I'm Avicena. Born
                          in Bandung 2002. I am a driven and hard-working
                          individual person with a passion for creating elegant
                          solutions in the least amount of time. I am committed
                          to learning and self-development in order to
                          consistently achieve better results.
                          <br />
                          <br />
                          Passionate about building world-class any applications
                          and am always highly enthused about future
                          technologies. With this background, I am well-equipped
                          to lead and succeed in the fast-paced world of IT.
                          Whether working on a team or individually, I am
                          confident in my ability to deliver high-quality
                          results and contribute to the success of any project.
                        </p>
                      </Item1>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          margin: "1rem 0",
        }}
      >
        Career Path
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2023 - Mar 2023"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">
            RnD Software Engineer - Front End
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Formulatrix Indonesia
          </h4>
          <p>
            ◉ Promoted to full-time employee after completing internship <br />
            ◉ Leading and managing the development of the web application,
            including coordinating the work of the intern team and ensuring that
            the project stays on track and meets deadlines. <br />
            ◉ Worked closely with stakeholders to understand their needs and
            requirements and incorporate their feedback into the project. <br />
            ◉ Utilized agile software development methodologies to ensure that
            the project remained flexible to changing requirements. <br />◉
            Developed a web application using cutting-edge technologies and
            tools, such as React.js, Redux, REST APIs, ASP .NET, Open Project,
            SourceTree, Githlab.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2022 - Dec 2022"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">
            RnD Software Engineer Internship - Front End
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Formulatrix Indonesia
          </h4>
          <p>
            ◉ Worked on a variety of projects and responsibilities such as
            WebApp Chat System, Website E-Store, Formulatrix Common UI Library,
            Formulatrix Inventory Tools.
            <br />
            ◉ Lead a team of three other interns.
            <br />◉ Created technical documentation, including user manuals and
            design specifications, to ensure that the project was
            well-documented and easy to maintain
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="June 2022 - July 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">
            SEO & SEM Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            PT Garuda Solusi Kreatif{" "}
          </h4>
          <p>
            ◉ Developed a website & implemented SEO and SEM strategies for
            DonerKingBab (SMEs) <br />
            ◉ Significantly increased total clicks on website and Instagram page
            by 130% <br />◉ Increased online traffic and helped drive more
            business to DonerKingBab (SMEs)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Aug 2020 - Jan 2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<MdOutlineSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Swiss German University
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Bachelor of Information Technology
          </h5>
          <p>
            ◉ Specializing in IT Technopreneurship <br />
            ◉ Member of Student Ambassador <br />
            ◉ Awarded 50% Scholarship <br />
          </p>
          <p className="vertical-timeline-element-subtitle">Organization :</p>
          <p>
            ◉ Head of SAU/UKM E-Sport | 2021 - 2022 <br />
            Under my supervision, SAU/UKM E-Sport become one of the most Active
            and Popular in Swiss German University with 60+ Members.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Aug 2014 -  April 2020"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<MdOutlineSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Semesta Bilingual Boarding School
          </h3>
          <h5 className="vertical-timeline-element-subtitle">Student</h5>
          <p className="vertical-timeline-element-subtitle">Organization :</p>
          <p>
            ◉ President of Class | 2014 - 2020
            <br />
            ◉ Head of Rohis Semesta | 2015 - 2016 <br />
            ◉ Head of PASKIBRAKA | 2018 - 2019 <br />
            ◉ Bantara Pramuka | 2018 - 2019 <br />
            ◉ Head of Folkore | 2018 - 2019
            <br />
            ◉ Div. Creative Comm. - Oase Care | 2021 - 2022
            <br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Born in Bandung, 2002"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<MdStars />}
        />
      </VerticalTimeline>
    </>
  );
};

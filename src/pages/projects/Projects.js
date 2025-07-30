import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
// import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  // publicationsHeader,
  // publications,
} from "../../portfolio.js";
// import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";



class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>


         {/* Vietnamese QA system */}
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  Vietnamese QA system
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  <ul>
                    <li style={{marginTop: "10px"}}>
                    <span style={{ fontWeight: "bold" }}>Description: </span>A web application that allows users to create accounts, ask questions in Vietnamese based on their context, and store conversations in a database.</li>
                    <li style={{marginTop: "10px"}}>
                    <span style={{ fontWeight: "bold" }}>Algorithm: </span>Fine-tuned three BERT-based models on ViQuAD 2.0, followed by vectorization and retrieval for context extraction.</li>
                    <li style={{marginTop: "10px"}}>
                    <span style={{ fontWeight: "bold" }}>Deployment: </span>MERN stack with Docker and Kubernetes.</li>
                  </ul>
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Details and Source Code"
                    newTab={true}
                    href="https://github.com/lananh2905/QAA-MERN-Web"
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                {/* {<video
                  src={require("../../assets/videos/chatbot.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                />} */}
              </div>
            </div>
          </Fade>


        {/* Information Retrieval from KENH14 News Portal */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                { <img
                      src={require(`../../assets/images/information_retrievel.png`)}
                      alt="Information Retrieval"
                    /> }
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  Information Retrieval from KENH14 News Portal
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                <ul>
                  <li style={{marginTop: "10px"}}>
                    <span style={{ fontWeight: "bold", display: "inline" }}>Description: </span>A system that crawls articles from KENH14 and provides a web interface for keyword-based search with ranked results.</li>
                  <li style={{marginTop: "10px"}}>
                    <span style={{ fontWeight: "bold", display: "inline" }}>Algorithm: </span>Implemented Vector Space Model and BM25 for ranking relevance.</li>
                  <li style={{marginTop: "10px"}}>
                    <span style={{ fontWeight: "bold", display: "inline" }}>Deployment: </span>Frontend with HTML and JavaScript; backend with Python on Google Cloud.</li>
                </ul>
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Details and Source Code"
                    newTab={true}
                    href="https://github.com/OnionSm/CS419_Information_Retrieval"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade> 

        
         {/* Detect and decode QRCode */}
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                  <h1 className="blog-heading-text" style={{ color: theme.text }}>
                    Detect and Reconstruct Multiple QR Codes
                  </h1>
                  <p className="blog-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                    <ul>
                      <li style={{ marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>Description: </span>
                        A Computer Vision project for detecting multiple 2D QR codes in an image and reconstructing their content individually.
                      </li>
                      <li style={{ marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>Algorithm: </span>
                        Trained models using HOG + SVM, fine-tuned Faster R-CNN, and YOLOv8 for QR code detection. Reconstruction was performed using ZBar-based decoding techniques.
                      </li>
                      <li style={{ marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>Deployment: </span>
                        Implemented as an interactive web application using Streamlit.
                      </li>
                    </ul>
                  </p>
                <div className="blogsite-btn-div" style={{gap:50}}>
                  <Button
                    text="Details"
                    newTab={true}
                    href="https://drive.google.com/file/d/1NmYXsXEPbOCOE-WWvQETMli30bdtSUq0/view?usp=sharing"
                    theme={theme}
                  />
                  <Button
                    text="Source Code"
                    newTab={true}
                    href="https://github.com/OnionSm/CS406_AHA"
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                {/* {<video
                  src={require("../../assets/videos/qr_code.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                />} */}
              </div>
            </div>
          </Fade> 

          {/* Locket app */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                { <img
                      src={require(`../../assets/images/locket.png`)}
                      alt="Locket app"
                    /> }
              </div>
              <div className="address-heading-text-div">
                  <h1
                    className="address-heading-text"
                    style={{ color: theme.text }}
                  >
                    Locket Mobile Application
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    <ul>
                      <li style={{ marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold", display: "inline" }}>Description: </span>
                        A mobile application that simulates the core features of the Locket app.
                      </li>
                      <li style={{ marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold", display: "inline" }}>Backend: </span>
                        Reconstructed RESTful APIs and designed a database schema to manage user data and media sharing.
                      </li>
                      <li style={{ marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold", display: "inline" }}>Deployment: </span>
                        Frontend built with React Native; backend developed with ASP.NET; deployed using Docker and Google Cloud Platform.
                      </li>
                    </ul>
                  </p>

                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  
                </p>
                <div className="address-btn-div" style={{gap: 50}}>
                  <Button
                    text="Details"
                    newTab={true}
                    href="https://drive.google.com/file/d/1wTGqxJU2sgjBBdqkNjNn2Ob5jcA7Oca3/view?usp=drive_link"
                    theme={theme}
                  />
                  <Button
                    text="Frontend"
                    newTab={true}
                    href="https://github.com/OnionSm/CS526_LocketApp"
                    theme={theme}
                  />
                  <Button
                    text="Backend"
                    newTab={true}
                    href="https://github.com/OnionSm/LocketAPI"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>    

          {/* Solar System */}
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  Solar System Simulation
                </h1>
                <p className="blog-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  <ul>
                    <li style={{ marginTop: "10px" }}>
                      <span style={{ fontWeight: "bold" }}>Description: </span>
                      A web application that simulates the solar system in real-time, including planetary orbits, velocities, satellites, moons, and asteroid belts. Users can interact and customize the simulation based on their preferences.
                    </li>
                    <li style={{ marginTop: "10px" }}>
                      <span style={{ fontWeight: "bold" }}>Algorithm: </span>
                      Utilized Kepler's laws to calculate orbital paths, inclination, and rotational velocities of celestial bodies.
                    </li>
                    <li style={{ marginTop: "10px" }}>
                      <span style={{ fontWeight: "bold" }}>Deployment: </span>
                      Developed using Three.js and Blender; deployed on Google Cloud Platform.
                    </li>
                  </ul>
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Details and Source Code"
                    newTab={true}
                    href="https://github.com/OnionSm/Solar_System"
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                {/* {<video
                  src={require("../../assets/videos/solar_system.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                />} */}
              </div>
            </div>
          </Fade>      
        
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;

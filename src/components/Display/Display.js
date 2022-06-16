import React from "react";
import ImageSlider from "../Carousel/ImageSlider";
import { Container } from "react-bootstrap";
import footer from "bootstrap";
import {AiFillGithub} from "react-icons/ai"
import {FaTwitter} from "react-icons/fa"
import {MdOutlineMarkunread} from "react-icons/md"
import {AiFillLinkedin} from "react-icons/ai"
const Display = () => {
  return (
    <div>
      <ImageSlider />
      <Container className="container" >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" >
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            solid
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2022 AmaliTech</span>
        </div>
    
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="#efm"><AiFillLinkedin/></a></li>
          <li className="ms-3"><a className="text-muted" href="#jkl"><AiFillGithub/></a></li>
          <li className="ms-3"><a className="text-muted" href="#abc"><FaTwitter/></a></li>
          <li className="ms-3"><a className="text-muted" href="#efe"><MdOutlineMarkunread/></a></li>
        </ul>
      </footer>
    </Container>
    </div>
  );
};

export default Display;

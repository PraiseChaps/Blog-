import React from "react";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

const About = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBContainer>
        <MDBTypography note noteColor="primary">
          It is blogging website where you will find blog post related to
          different category like JavaScript, PHP, ReactJs, Css and Angular
        </MDBTypography>
      </MDBContainer>
    </div>
  );
};

export default About;

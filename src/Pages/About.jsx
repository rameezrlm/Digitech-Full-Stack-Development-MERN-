import React from "react";
import { Navbar } from "../components/Navbar";
import Seprator from "../components/Seprator";
import Footer from "../components/Footer";
import "../Styles/About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <Seprator content={"About Student Management System"} />

      <div className="about-container">
        <h2>Student Management System</h2>
        <p>
          The <strong>Student Management System</strong> is a modern web-based
          platform built to streamline academic management processes. It enables
          institutions to efficiently maintain student records, track academic
          performance, and manage course details—all from a single dashboard.
        </p>
        <p>
          The system reduces paperwork, saves time, and enhances accuracy by
          digitalizing traditional administrative workflows. Its simple and
          intuitive design ensures easy navigation for both staff and students,
          promoting efficiency and transparency in educational management.
        </p>
        <p>
          Whether you’re viewing student profiles, updating details, or managing
          performance reports, this platform makes every process smoother and
          smarter.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;

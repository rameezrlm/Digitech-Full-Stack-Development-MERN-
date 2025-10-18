import { Navbar } from "../components/Navbar";
import Seprator from "../components/Seprator";
import Footer from "../components/Footer";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Seprator content={"Contact Us"} />

      <div className="contact-container">
        <h2>Contact Information</h2>
        <p>
          Have questions or need assistance? We’re here to help! You can reach
          out to our team using the details below.
        </p>

        <div className="contact-info">
          <div>
            <h3>🏫 School Name:</h3>
            <p>University of Central Punjab</p>
          </div>

          <div>
            <h3>📧 Email:</h3>
            <p>info@ucp.edu.pk</p>
          </div>

          <div>
            <h3>📞 Phone:</h3>
            <p>+92 42 111 000 827</p>
          </div>

          <div>
            <h3>📍 Address:</h3>
            <p>
              Khayaban-e-Jinnah Road, Johar Town, Lahore, Punjab, Pakistan
            </p>
          </div>
        </div>

        <div className="contact-purpose">
          <h3>Contact For:</h3>
          <ul>
            <li>General inquiries about admissions and programs</li>
            <li>Technical support for Student Management System</li>
            <li>Feedback or suggestions for system improvement</li>
            <li>Partnership and collaboration opportunities</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

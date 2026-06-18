import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Connect */}
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="https://linkedin.com/in/mayanktiwari12"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Mayank Tiwari
              </a>
            </p>

            <p>
              <a
                href="https://github.com/joy1242004"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — joy1242004
              </a>
            </p>

            <p>
              <a
                href="mailto:mayanktiwari1204@gmail.com"
                data-cursor="disable"
              >
                Email — mayanktiwari1204@gmail.com
              </a>
            </p>

            <h4>Education</h4>
            <p>B.E. Computer Science Engineering</p>
            <p>ACS College of Engineering, Bengaluru — 2022–2026</p>
          </div>

          {/* Social */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/joy1242004"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://linkedin.com/in/mayanktiwari12"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="mailto:mayanktiwari1204@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mayank Tiwari</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
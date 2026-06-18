import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* College */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. - Computer Science Engineering</h4>
                <h5>ACS College of Engineering, Bengaluru</h5>
              </div>
              <h3>2022 – 2026</h3>
            </div>
            <p>
              Pursuing a Bachelor's degree with a focus on Software Development, Data Structures & Algorithms, Cloud Computing, and Blockchain Technologies.
            </p>
          </div>

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android App Development Intern (GenAI)</h4>
                <h5>MindMatrix.io – A Product of CL Infotech</h5>
              </div>
              <h3>Feb 2026 – May 2026</h3>
            </div>
            <p>
              Developed Android applications using Kotlin and Android Studio. Worked with Jetpack Compose, RESTful APIs, debugging, testing, version control, and SDLC processes to build scalable mobile applications.
            </p>
          </div>

          {/* Campus Ambassador */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Ambassador</h4>
                <h5>Polaris School of Technology</h5>
              </div>
              <h3>Sep 2025 – Nov 2025</h3>
            </div>
            <p>
              Promoted technical initiatives and events, coordinated student engagement activities, and strengthened leadership, communication, and organizational skills.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Academic Foundation</h4>
                <h5>Student</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              Balancing a highly diverse academic workload, tackling complex subjects from Microcontrollers and Digital Signal Processing to Financial Management and Functional English.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Execution</h4>
                <h5>Multidisciplinary Work</h5>
              </div>
              <h3>2025+</h3>
            </div>
            <p>
              Focused on hands-on technical and analytical projects, successfully bridging the gap between theoretical engineering concepts, software development lifecycles, and detailed corporate financial analyses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

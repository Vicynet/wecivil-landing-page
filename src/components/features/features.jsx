import React from "react";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const featureCards = {
    position: "relative",
    opacity: 0.4,
    top: "40px",
    maxWidth: "350px",
    transition: "all .5s ease-in",
    ...(inView ? { top: "0px", opacity: 1 } : {}),
  };

  return (
    <div className="container" style={{ paddingTop: "2em" }}>
      <div
        className="row row-cols-1 row-cols-md-3 justify-content-around"
        ref={ref}
      >
        <div
          className="card mb-4 h-100 shadow-lg"
          style={featureCards}
        >
          <div className="card-body align-items-center text-center">
            <p className="card-text" style={{ color: "#0062FF" }}>
              INCLUSION
            </p>
          </div>
        </div>
        <div
          className="card mb-4 h-100 shadow-lg"
          style={featureCards}
        >
          <div className="card-body align-items-center text-center">
            <p className="card-text" style={{ color: "#0062FF" }}>
              EDUCATE
            </p>
          </div>
        </div>
        <div
          className="card mb-4 h-100 shadow-lg"
          style={featureCards}
        >
          <div className="card-body align-items-center text-center">
            <p className="card-text" style={{ color: "#0062FF" }}>
              INFORM
            </p>
          </div>
        </div>
        <div
          className="card mb-4 h-100 shadow-lg"
          style={featureCards}
        >
          <div className="card-body align-items-center text-center">
            <p className="card-text" style={{ color: "#0062FF" }}>
              POLITICAL GUIDE
            </p>
          </div>
        </div>
        <div
          className="card mb-4 h-100 shadow-lg"
          style={featureCards}
        >
          <div className="card-body align-items-center text-center">
            <p className="card-text" style={{ color: "#0062FF" }}>
              DATA-DRIVEN DECISION MAKING
            </p>
          </div>
        </div>
        <div
          className="card mb-4 h-100 shadow-lg"
          style={featureCards}
        >
          <div className="card-body align-items-center text-center">
            <p className="card-text" style={{ color: "#0062FF" }}>
              EMPOWERMENT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

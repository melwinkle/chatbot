import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Enrollment Details", handler: props.actionProvider.handleEnrollmentDetailsList, id: 1 },
    { text: "Features and Duration", handler: () => {}, id: 2 },
    { text: "Scholarship and Resources", handler: () => {}, id: 3 },
    { text: "Kalangu Grades and Assessments", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;

// in src/components/LearningOptions/LearningOptions.css


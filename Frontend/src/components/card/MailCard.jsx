import React from "react";
import "./card.css";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const MailCard = (props) => {
  function convertISOToDateString(isoDate) {
    const date = new Date(isoDate);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="card-container space-y-2">
      <div className="main-title">
        <h1>{props.fromEmail}</h1>
        <h4 className="text-gray-400">
          {convertISOToDateString(props.sentAt)}
        </h4>
      </div>
      <h2 className="subject-title">
        {props.subject.length > 30
          ? `${props.subject.slice(0, 30)}...`
          : props.subject}
      </h2>
      <div className="span-content-div">
        <span className="span-content">
          <span className="green-dot"></span>interested
        </span>
        <span className="span-content">
          {" "}
          <PiPaperPlaneTiltFill className="mr-2"/>
          Campaign Name
        </span>
      </div>
    </div>
  );
};

export default MailCard;

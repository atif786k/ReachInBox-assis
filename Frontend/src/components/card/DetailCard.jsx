import React from "react";

const DetailCard = (props) => {
  function convertISOToDateString(isoDate) {
    const date = new Date(isoDate);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <section className="detail-card-container space-y-4">
      <div className="card-upper-div">
        <h1>{props.subject}</h1>
        <h4>{convertISOToDateString(props.sentAt)}</h4>
      </div>
      <div className="mails">
        <h2 className="email-details">from: {props.fromEmail}</h2>
        <h2 className="email-details">to: {props.toEmail}</h2>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: props.body }}
        className="body-content"
      ></p>
    </section>
  );
};

export default DetailCard;

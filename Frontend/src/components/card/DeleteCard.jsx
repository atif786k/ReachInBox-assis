import React from "react";
import "./card.css";

const DeleteCard = ({ onDeleteConfirm, onCancel }) => {
  return (
    <div className="popup">
      <div className="popup-inner space-y-10 text-[18px]">
        <h2>Are you sure?</h2>
        <p>Are you sure you want to delete this mail?</p>
        <button className="btn-style cancel-btn" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn-style delete-btn" onClick={onDeleteConfirm}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteCard;

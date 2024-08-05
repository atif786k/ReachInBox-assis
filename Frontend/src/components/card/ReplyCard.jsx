import React, { useState } from "react";
import "./card.css";
import { IoMdClose } from "react-icons/io";

const ReplyCard = ({ sendReply, onCancel }) => {
  const [editorContent, setEditorContent] = useState({
    toEmail: "",
    fromEmail: "",
    subject: "",
    body: "",
  });
  return (
    <div className="reply-popup">
      <div className="reply-popup-inner">
        <h1 className="reply-title bg-[#23272c] pb-4 px-[18px] border-b border-[#33383f]">
          <span>Reply</span>
          <span className="text-2xl cursor-pointer">
            <IoMdClose onClick={onCancel} />
          </span>
        </h1>
        <ul className="reply-details">
          <li className="border-b border-[#33383f]">
            to :{" "}
            <input
              type="text"
              className="input-fields"
              value={editorContent.toEmail}
              onChange={(event) => {
                setEditorContent((prev) => ({
                  ...prev,
                  toEmail: event.target.value,
                }));
              }}
            />{" "}
          </li>
          <li className="border-b border-[#33383f]">
            from :{" "}
            <input
              type="text"
              className="input-fields"
              value={editorContent.fromEmail}
              onChange={(event) => {
                setEditorContent((prev) => ({
                  ...prev,
                  fromEmail: event.target.value,
                }));
              }}
            />
          </li>
          <li className="border-b border-[#33383f]">
            subject :{" "}
            <input
              type="text"
              className="input-fields"
              value={editorContent.subject}
              onChange={(event) => {
                setEditorContent((prev) => ({
                  ...prev,
                  subject: event.target.value,
                }));
              }}
            />
          </li>
        </ul>
        <div className="text-editor">
          <textarea
            className="w-full bg-[#141517] outline-none"
            cols="20"
            rows="12"
            id="textarea"
            name="textarea"
            value={editorContent.body}
            placeholder="Message Body"
            onChange={(event) => {
              setEditorContent((prev) => ({
                ...prev,
                body: event.target.value,
              }));
            }}
          ></textarea>
        </div>
        <div className="button-group">
          <button
            className="send-button mx-4 border-none py-2 px-10 rounded-lg text-lg bg-gradient-to-r from-blue-900 to-blue-600"
            onClick={() => sendReply(editorContent)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;

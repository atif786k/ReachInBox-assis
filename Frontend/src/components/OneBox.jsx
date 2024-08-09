import React, { useCallback, useEffect, useState } from "react";
import axios from "../axios";
import MailCard from "./card/MailCard";
import DetailCard from "./card/DetailCard";
import DeleteCard from "./card/DeleteCard";
import ReplyCard from "./card/ReplyCard";
import Theme from "./Theme";
import "./style.css";
import {
  IoMdHome,
  IoMdContact,
  IoMdMail,
  IoMdMenu,
  IoMdSearch,
  IoMdMailOpen,
} from "react-icons/io";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowsExpand } from "react-icons/bs";
import { IoReload } from "react-icons/io5";
import { FaReply } from "react-icons/fa6";
import { FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";

const OneBox = ({ token, Id }) => {
  const [items, setItems] = useState([]);
  const [oneThread, setOneThread] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [replyPopUp, setReplyPopUp] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setItems(response.data.data || []);
      setError(null);
      // console.log(response.data.data);
    } catch (error) {
      console.error(
        "Failed to fetch data:",
        error.response ? error.response.data : error.message
      );
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const singleThread = async (thread_id) => {
    try {
      const response = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOneThread(response.data.data);
      setSelectedThread(thread_id);
      setError(null);
      // console.log("Single Thread: ", response.data.data);
    } catch (error) {
      console.log(
        "Failed to fetch thread: ",
        error.response ? error.response.data : error.message
      );
      setError("Failed to fetch single thread. Please try again.");
    }
  };

  const deleteThread = async () => {
    if (!selectedThread) return;
    try {
      const response = await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThread}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchData();
      setError(null);
      setDeletePopUp(false);
      // console.log(response.data.message);
    } catch (error) {
      console.log(
        "Failed to Delete the thread: ",
        error.response ? error.response.data : error.message
      );
      setError("Failed to Delete the thread. Please try again.");
    }
  };

  const handleSendReply = async (replyData) => {
    if (!selectedThread) return;
    try {
      const response = await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${selectedThread}`,
        replyData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchData();
      setError(null);
      console.log(replyData);
    } catch (error) {
      console.log(
        "Failed to Post reply: ",
        error.response ? error.response.data : error.message
      );
      setError("Failed to Post reply. Please try again.");
    }
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === "d" || e.key === "D") {
      setDeletePopUp(true);
    } else if (e.key === "r" || e.key === "R") {
      setReplyPopUp(true);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchData();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [token, handleKeyDown]);

  return (
    <main className={`onebox-container ${theme}`}>
      <nav className="side-nav">
        <img src="/images/reachinbox_ai_logo.jpeg" width="50px" alt="" />
        <ul className="side-nav-items space-y-12">
          <li>
            <Link to="/onebox/home">
              <IoMdHome className="hover:text-gray-400" />
            </Link>
          </li>
          <li>
            <IoMdContact className="hover:text-gray-400" />
          </li>
          <li>
            <IoMdMail className="hover:text-gray-400" />
          </li>
          <li>
            <PiPaperPlaneTiltFill className="hover:text-gray-400" />
          </li>
          <li>
            <IoMdMenu className="hover:text-gray-400" />
          </li>
          <li>
            <Link to="/onebox">
              <FaInbox className="hover:text-gray-400" />
            </Link>
          </li>
        </ul>
        <p className="user-profile-initials">AS</p>
      </nav>
      <div className="horizontal-div">
        <nav className="upper-nav">
          <h2>Onebox</h2>
          <h2 className="flex items-center">
            <Theme theme={theme} toggleTheme={toggleTheme} />
            Atif's Workspace  <MdKeyboardArrowDown className="text-3xl ml-2" />
          </h2>
        </nav>

        {loading === true ? (
          <div className="loading-div space-x-6">
            <p className="loading-animation animate-spin"></p>
            <p className="loading-animation animate-spin"></p>
            <p className="loading-animation animate-spin"></p>
          </div>
        ) : (
          <div className="vertical-div">
            <div className="list-items space-y-4">
              <h1 className="flex justify-between items-center text-blue-600">
                <span className="flex items-center">
                  All Inbox(s)
                  <MdKeyboardArrowDown className="text-2xl ml-2" />
                </span>
                <span className="reload-btn flex items-center justify-center">
                  <IoReload className="text-[18px] text-white" />
                </span>
              </h1>
              <h4 className="text-gray-400">
                <span className=" text-white text-[18px]">
                  {items.length}/25
                </span>{" "}
                inboxes selected
              </h4>
              <div className="relative">
                <IoMdSearch className="absolute top-[7px] left-3 text-xl" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="search-field"
                />
              </div>
              <h4 className="flex justify-between">
                <span>
                  <span className="text-blue-600">{items.length}</span> New
                  Replies
                </span>
                <span className="flex">
                  Newest <MdKeyboardArrowDown className="text-2xl ml-2" />
                </span>
              </h4>
              {items.map((e) => {
                return (
                  <div key={e.id} onClick={() => singleThread(e.threadId)}>
                    <MailCard
                      fromEmail={e.fromEmail}
                      subject={e.subject}
                      sentAt={e.sentAt}
                      isRead={e.isRead}
                      threadID={e.threadId}
                    />
                  </div>
                );
              })}
            </div>
            <div className="list-item-detail">
              <div className="upper-div border-b border-[#33383f]">
                <div className="first-div">
                  <h1>Orlando</h1>
                  <h4>orlandom@gmail.com</h4>
                </div>
                <div className="second-div space-x-4">
                  <span className="box-span">
                    <span className="yellow-dot"></span>Meeting Completed
                    <MdKeyboardArrowDown className="text-2xl ml-2" />
                  </span>
                  <span className="box-span">
                    More
                    <MdKeyboardArrowDown className="text-2xl ml-2" />
                  </span>
                  <span className="box-span">...</span>
                </div>
              </div>
              <section className="down-div space-y-4">
                <h2 className="today-title absolute right-[47%]">Today</h2>
                <hr className="border-[#33383f]" />
                <br />
                {oneThread.length > 0 ? (
                  oneThread.map((e) => {
                    return (
                      <div key={e.id}>
                        <DetailCard
                          subject={e.subject}
                          sentAt={e.sentAt}
                          fromEmail={e.fromEmail}
                          toEmail={e.toEmail}
                          body={e.body}
                        />
                      </div>
                    );
                  })
                ) : (
                  <DetailCard
                    subject="New Product Launch"
                    sentAt=""
                    fromEmail="jeanne@icloud.com"
                    toEmail=" lennon.j@mail.com"
                    body="I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.y"
                  />
                )}
                <h2 className="expand absolute right-[41%]">
                  <BsArrowsExpand className="mr-2" />
                  View all 4 replies
                </h2>
                {replyPopUp && (
                  <ReplyCard
                    sendReply={handleSendReply}
                    onCancel={() => setReplyPopUp(false)}
                  />
                )}
                <button
                  onClick={() => setReplyPopUp(true)}
                  className="flex items-center content-center fixed bottom-10 border-none py-2 px-10 rounded-lg text-lg bg-gradient-to-r from-blue-900 to-blue-600"
                >
                  <FaReply className="mr-2" />
                  Reply
                </button>
              </section>
            </div>
            <section className="third-section space-y-6">
              <h2 className="third-section-titles">Lead Details</h2>
              <ul className="lead-detail-items space-y-4">
                <li>
                  <span>Name</span>
                  <span className="grey-color">Orlando</span>
                </li>
                <li>
                  <span>Contact No</span>
                  <span className="grey-color">+54-9062827869</span>
                </li>
                <li>
                  <span>Email ID</span>
                  <span className="grey-color">orlando@gmail.com</span>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <span className="grey-color">linkedin.com/in/timvadde/</span>
                </li>
                <li>
                  <span>Company Name</span>
                  <span className="grey-color">Reachinbox</span>
                </li>
              </ul>
              <h2 className="third-section-titles">Activites</h2>
              <h4>Campaign Name</h4>
              <h5>3 Steps | 5 Days in Sequence</h5>
              <ul className="activity-items space-y-4">
                <li>
                  <span className="mail-circle">
                    <IoMdMail className="text-2xl" />
                  </span>{" "}
                  <span>
                    <h5>Step 1: Email</h5>
                    <h5 className="open-mail">
                      <PiPaperPlaneTiltFill className="mr-2" />
                      Sent 3rd, Feb
                    </h5>
                  </span>
                </li>
                <li>
                  <span className="mail-circle">
                    <IoMdMail className="text-2xl" />
                  </span>{" "}
                  <span>
                    <h5>Step 2: Email</h5>
                    <h5 className="open-mail">
                      <IoMdMailOpen className="text-yellow-500 mr-2" />
                      Open 5th, Feb
                    </h5>
                  </span>
                </li>
                <li>
                  <span className="mail-circle">
                    <IoMdMail className="text-2xl" />
                  </span>{" "}
                  <span>
                    <h5>Step 3: Email</h5>
                    <h5 className="open-mail">
                      <IoMdMailOpen className="text-yellow-500 mr-2" />
                      Open 5th, Feb
                    </h5>
                  </span>
                </li>
              </ul>
            </section>
          </div>
        )}
      </div>
      {deletePopUp && (
        <DeleteCard
          onDeleteConfirm={deleteThread}
          onCancel={() => setDeletePopUp(false)}
        />
      )}
    </main>
  );
};

export default OneBox;

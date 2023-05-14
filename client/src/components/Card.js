import React from "react";
import { AiOutlineStock, AiOutlinePlayCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Card = ({ jobs }) => {
  const timeStamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toDateString();
  };
  return (
    <>
      {jobs &&
        jobs.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="hire ic">
                <AiOutlineStock className="icon" /> <span>Actively hiring</span>
              </div>
              <div className="title">{item.title}</div>
              <div className="company">{item.company}</div>

              <div className="details">
                <div className="work">
                  <div className="hire">
                    <GrLocation className="icon" />
                    <span>Location</span>
                  </div>
                  <div className="dot">{item.locations}</div>
                </div>
                <div className="date">
                  <div className="hire">
                    <AiOutlinePlayCircle className="icon" />
                    <span>Start date</span>
                  </div>
                  <div className="dot">{timeStamp(item.date)}</div>
                </div>
              </div>
              <div className="footer">
                <button id="view-btn">
                  <Link to={`/${item._id}`}>View details</Link>
                </button>
                <button id="apply-btn">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Apply now
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdDescription } from "react-icons/md";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  useEffect(() => {
    const response = axios
      .get(`http://localhost:4000/${id}`)
      .then((res) => {
        setJob(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
  }, [id]);
  const timeStamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toDateString();
  };
  return (
    <div className="body">
      {job && (
        <div className="card-body">
          <div className="title">{job.title}</div>
          <div className="company">{job.company}</div>

          <div className="details">
            <div className="work">
              <div className="hire">
                <GrLocation className="icon" />
                <span>Location</span>
              </div>
              <div className="dot">{job.locations}</div>
            </div>
            <div className="date">
              <div className="hire">
                <AiOutlinePlayCircle className="icon" />
                <span>Start date</span>
              </div>
              <div className="dot">{timeStamp(job.date)}</div>
            </div>
          </div>
          <div className="description">
            <div className="hire ic">
              <MdDescription className="icon" />
              <span>Description</span>
            </div>
            <div className="dot">{job.description}</div>
          </div>
          <div className="footer">
            <button id="apply-btn">
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                Apply now
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;

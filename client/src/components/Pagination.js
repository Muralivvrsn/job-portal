import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Card from "./Card";
import { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
const Pagination = () => {
  // variables
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  //handlePagefunction
  const handlePageChange = (data) => {
    console.log(data);
    setPageNumber(data.selected);
  };

  //useEffect hook
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await axios
        .get("http://localhost:4000", {
          params: { skipValue: parseInt(pageNumber) * 10 },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
      console.log(response);
    };
    fetchData();

    setLoading(false);
  }, [pageNumber]);


  //component
  return (
    <div>
      {loading && <Loader className="margin-auto" />}
      <div className="home">
        <Card jobs={data} />
      </div>
      <ReactPaginate
        previousLabel={<FaLessThan />}
        nextLabel={<FaGreaterThan />}
        breakLabel={"..."}
        pageCount={Math.ceil(9876 / 10)}
        onPageChange={handlePageChange}
        containerClassName={"pagination-container"}
        previousClassName={"pagination-previous"}
        nextClassName={"pagination-next"}
        breakClassName={"pagination-break"}
        pageClassName={"pagination-page"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
};

export default Pagination;

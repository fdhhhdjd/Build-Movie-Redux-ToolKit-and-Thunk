import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import Img from "../../Images/logo.png";
import Img1 from "../../Images/img13.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { GetApiHarry, GetShowListing } from "../../redux/MovieSlice";
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const input = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") {
      return toast.info("Please Enter Search Term");
    }
    dispatch(GetApiHarry(term));
    dispatch(GetShowListing(term));
    setTerm("");
  };
  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <>
      <div className="header">
        <div className="logo"> Web Movie Redux Toolkit</div>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              ref={input}
              value={term}
              placeholder="Search Movies or Shows"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="user-image">
          <img src={Img1} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Header;

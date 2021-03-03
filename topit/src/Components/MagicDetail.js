import React, { useState, useEffect, useContext } from "react";
import MagicData from "../MagicData";
import { Link } from "react-router-dom";
import SearchContext from "./SearchContext";
import Axios from "axios";

function MagicDetail() {
  const [magic, setMagic] = useState([]);
  const [currentMagic, setCurrentMagic] = useState(null);
  //   const [currentID, setCurrentID] = useState(-1);
  //   const [searchTitle, setSearchTitle] = useState("");
  //***NEW CODE */
  const [searchString, setSearchString] = useState("");
  const { setSearchResults, setSearchComplete } = useContext(SearchContext);

  const axios = require("axios");
  const url = "https://rocky-caverns-41537.herokuapp.com";
  function getResults(searchString) {
    const result = axios.get(`${url}/api/magic/${searchString}`);
    return result;
  }
  ///////*****^^^^^^^^^^^^^^^^^^^^^^ */
  //   useEffect(() => {
  //     grabMagic();
  //   }, []);

  //   const onChangeSearch = (e) => {
  //     const searchTitle = e.target.value;
  //     setSearchTitle(searchTitle);
  //   };

  ////***NEW CODE */

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
    getResults(searchString).then((result) => {
      setSearchResults(result.data);
      setSearchComplete(true);
    });
  };

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const grabMagic = async () => {
    const { data } = await Axios.get(`${url}/api/magic/`);
    const magic = data;
    setMagic(magic);
    console.log(magic);
  };

  useEffect(() => {
    grabMagic();
  }, []);

  //Getting all Data --Old
  //   const grabMagic = () => {
  //     MagicData.getAll()
  //       .then((response) => {
  //         setMagic(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  const workingMagic = (magic, id) => {
    setCurrentMagic(magic);
    // setCurrentID(id);
  };

  //   const findByTitle = () => {
  //     MagicData.findByTitle(searchTitle)
  //       .then((response) => {
  //         setMagic(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  return (
    <div className="detail">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Retrieve Your Knowledge"
            onChange={handleChange}
            required
            //   value={searchTitle}
            //   onChange={onChangeSearch}
          />

          {/* <button className="search-butt" type="button" onClick={findByTitle}> */}
          <button className="search-butt" type="button">
            Seek
          </button>
        </form>
      </div>

      <div className="detail">
        <h3>Your Secrets</h3>

        <ul className="magic-list">
          {magic &&
            magic.map((magic, id) => (
              <li
                className="list-item "
                onClick={() => workingMagic(magic, id)}
                key={id}
              >
                {magic.title}
              </li>
            ))}
        </ul>
      </div>
      <div className="magic-view">
        {currentMagic ? (
          <div>
            <h3>Magic</h3>
            <div>
              <label>Title:</label> {currentMagic.title}
            </div>
            <div>
              <label>Source: </label> {currentMagic.source}
            </div>
            <div>
              <label>Props: </label> {currentMagic.props}
            </div>
            <div>
              <label>Description: </label> {currentMagic.description}
            </div>
            <div>
              <label>Category: </label> {currentMagic.category}
            </div>
            <div>
              <label>Video Link: </label> {currentMagic.video_url}
            </div>
            <div>
              <label>Added By: </label> {currentMagic.owner}
            </div>

            <Link to={"/magic/" + currentMagic.id} className="update">
              Update
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Envoke...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MagicDetail;

import React, { useState, useEffect } from "react";
import MagicData from "../MagicData";
import { Link } from "react-router-dom";

function MagicDetail() {
  const [magic, setMagic] = useState([]);
  const [currentMagic, setCurrentMagic] = useState(null);
  const [currentID, setCurrentID] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    grabMagic();
  }, []);

  const onChangeSearch = (ele) => {
    const searchTitle = ele.target.value;
    setSearchTitle(searchTitle);
  };

  const grabMagic = () => {
    MagicData.getAll()
      .then((res) => {
        setMagic(res.data);
        console.log(res.data);
      })
      .catch((ele) => {
        console.log(ele);
      });
  };

  const clearList = () => {
    grabMagic();
    setCurrentMagic(null);
    setCurrentID(-1);
  };

  const workingMagic = (magic, id) => {
    setCurrentMagic(magic);
    setCurrentID(id);
  };

  const grabTitle = () => {
    MagicData.grabTitle(searchTitle)
      .then((res) => {
        setMagic(res.data);
        console.log(res.data);
      })
      .catch((ele) => {
        console.log(ele);
      });
  };

  return (
    <div className="detail">
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Retrieve Your Knowledge"
          value={searchTitle}
          onChange={onChangeSearch}
        />

        <button className="search-butt" type="button" onClick={grabTitle}>
          Seek
        </button>
      </div>

      <div className="detail">
        <h3>Your Secrets</h3>

        <ul className="magic-list">
          {magic &&
            magic.map((magic, id) => (
              <li
                className={"list-item " + (id === currentID ? "active" : "")}
                onClick={() => setCurrentMagic(magic, id)}
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

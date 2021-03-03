import React, { useState, useEffect } from "react";
import MagicData from "../MagicData";
import { Link } from "react-router-dom";

const MagicDetail = () => {
  const [magic, setMagic] = useState([]);
  const [currentMagic, setCurrentMagic] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveMagic();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveMagic = () => {
    MagicData.getAll()
      .then((response) => {
        setMagic(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const refreshList = () => {
  //   retrieveTutorials();
  //   setCurrentTutorial(null);
  //   setCurrentIndex(-1);
  // };

  const setActiveMagic = (magic, index) => {
    setCurrentMagic(magic);
    setCurrentIndex(index);
  };

  // const removeAllTutorials = () => {
  //   TutorialDataService.removeAll()
  //     .then(response => {
  //       console.log(response.data);
  //       refreshList();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  const findByTitle = () => {
    MagicData.findByTitle(searchTitle)
      .then((response) => {
        setMagic(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="detail">
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Retrieve Your Knowledge"
          onChange={onChangeSearchTitle}
          required
          //   value={searchTitle}
          //   onChange={onChangeSearch}
        />

        <button className="search-butt" type="button" onClick={findByTitle}>
          Seek
        </button>
      </div>

      <div className="detail">
        <h3>Your Secrets</h3>

        <ul className="list-group">
          {magic &&
            magic.map((magic, index) => (
              <li
                className={"list-group-item " + (index === currentIndex)}
                onClick={() => setActiveMagic(magic, index)}
                key={index}
              >
                {magic.title}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentMagic ? (
          <div>
            <h3>Magic</h3>
            <div>
              <label>Title:</label> {currentMagic.title}
            </div>
            <div>
              <label>Source:</label> {currentMagic.source}
            </div>
            <div>
              <label>Props:</label> {currentMagic.props}
            </div>
            <div>
              <label>Description:</label> {currentMagic.description}
            </div>
            <div>
              <label>Category:</label> {currentMagic.category}
            </div>
            <div>
              {" "}
              <label>Video Link:</label> {currentMagic.video_url}
            </div>
            <div>
              <label>Added By:</label> {currentMagic.owner}
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
};

export default MagicDetail;

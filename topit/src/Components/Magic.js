import React, { useState, useEffect } from "react";
import MagicData from "../MagicData";

function Magic(props) {
  const initialState = {
    id: null,
    title: "",
    source: "",
    props: "",
    description: "",
    category: "",
    video_url: "",
    owner: "",
  };
  const [status, setStatus] = useState("");
  const [currentMagic, setCurrentMagic] = useState(initialState);

  const getMagic = (id) => {
    MagicData.get(id)
      .then((res) => {
        setCurrentMagic(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getMagic(props.match.params.id);
  }, [props.match.params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentMagic({ ...currentMagic, [name]: value });
  };

  const updateMagic = () => {
    MagicData.update(currentMagic.id, currentMagic)
      .then((res) => {
        console.log(res.data);
        setStatus("Magic has been updated!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteMagic = () => {
    MagicData.remove(currentMagic.id)
      .then((res) => {
        console.log(res.data);
        props.history.push("/magic");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {currentMagic ? (
        <div className="update-form">
          <h3>Magic</h3>
          <form>
            <div className="form">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="input"
                id="title"
                name="title"
                value={currentMagic.title}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="source">Source</label>
              <input
                type="text"
                className="input"
                id="source"
                name="source"
                value={currentMagic.source}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="props">Props</label>
              <input
                type="text"
                className="input"
                id="props"
                name="props"
                value={currentMagic.props}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="input"
                id="description"
                name="description"
                value={currentMagic.description}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="input"
                id="category"
                name="category"
                value={currentMagic.category}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="video_url">Video Link</label>
              <input
                type="text"
                className="input"
                id="video_url"
                name="video_url"
                value={currentMagic.video_url}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="owner">Added By</label>
              <input
                type="text"
                className="input"
                id="owner"
                name="owner"
                value={currentMagic.owner}
                onChange={handleChange}
              />
            </div>
          </form>

          <button className="btn" onClick={deleteMagic}>
            Vanish
          </button>

          <button type="submit" className="btn" onClick={updateMagic}>
            Update
          </button>
          <p>{status}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Magic;

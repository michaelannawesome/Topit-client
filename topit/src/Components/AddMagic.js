import React, { useState } from "react";
import MagicData from "../MagicData";

function AddMagic() {
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
  const [magic, setMagic] = useState(initialState);
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMagic({ ...magic, [name]: value });
  };
  const saveMagic = () => {
    let data = {
      title: magic.title,
      source: magic.source,
      props: magic.props,
      description: magic.description,
      category: magic.category,
      video_url: magic.video_url,
      owner: magic.owner,
    };

    MagicData.create(data)
      .then((res) => {
        setMagic({
          id: res.data.id,
          title: res.data.title,
          source: res.data.source,
          props: res.data.props,
          description: res.data.description,
          category: res.data.category,
          video_url: res.data.video_url,
          owner: res.data.owner,
        });
        setSubmit(true);
        console.log(res.data);
      })
      .catch((ele) => {
        console.log(ele);
      });
  };
  const newMagic = () => {
    setMagic(initialState);
    setSubmit(false);
  };
  return (
    <div className="submit">
      {submit ? (
        <div>
          <h5>Sim Sala Bim</h5>
          <button className="addButt" onClick={newMagic}>
            Ta-Add-A
          </button>
        </div>
      ) : (
        <div>
          <div className="form">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              className="input"
              id="title"
              value={magic.title}
              onChange={handleChange}
              name="title"
            />
          </div>
          <div className="form">
            <label htmlFor="source">Source: </label>
            <input
              type="text"
              className="input"
              id="source"
              value={magic.source}
              onChange={handleChange}
              name="source"
            />
          </div>
          <div className="form">
            <label htmlFor="props">Props: </label>
            <input
              type="text"
              className="input"
              id="props"
              value={magic.props}
              onChange={handleChange}
              name="props"
            />
          </div>
          <div className="form">
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              className="input"
              id="description"
              value={magic.description}
              onChange={handleChange}
              name="description"
            />
          </div>
          <div className="form">
            <label htmlFor="category">Category: </label>
            <input
              type="text"
              className="input"
              id="category"
              value={magic.category}
              onChange={handleChange}
              name="category"
            />
          </div>
          <div className="form">
            <label htmlFor="video_url">Video Link: </label>
            <input
              type="text"
              className="input"
              id="video_url"
              value={magic.video_url}
              onChange={handleChange}
              name="video_url"
            />
          </div>
          <div className="form">
            <label htmlFor="owner">Added By: </label>
            <input
              type="text"
              className="input"
              id="owner"
              value={magic.owner}
              onChange={handleChange}
              name="owner"
            />
          </div>
          <button onClick={saveMagic} className="addButt">
            Sim Sala Mit
          </button>
        </div>
      )}
    </div>
  );
}

export default AddMagic;

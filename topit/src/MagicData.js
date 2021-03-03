/* eslint-disable import/no-anonymous-default-export */
import https from "./api-connection";

const getAll = () => {
  return https.get("/tutorials");
};

const get = (id) => {
  return https.get(`/tutorials/${id}`);
};

const create = (data) => {
  return https.post("/tutorials", data);
};

const update = (id, data) => {
  return https.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
  return https.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return https.delete(`/tutorials`);
};

const findByTitle = (title) => {
  return https.get(`/tutorials?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

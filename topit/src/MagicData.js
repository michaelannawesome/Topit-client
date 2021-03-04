/* eslint-disable import/no-anonymous-default-export */
import http from "./api-connection";

const getAll = () => {
  return http.get("/magic");
};

const get = (id) => {
  return http.get(`/magic/${id}`);
};

const create = (data) => {
  return http.post("/magic", data);
};

const update = (id, data) => {
  return http.put(`/magic/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/magic/${id}`);
};

const findByTitle = (title) => {
  return http.get(`/magic?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,

  findByTitle,
};

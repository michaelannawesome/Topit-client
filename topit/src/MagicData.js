import http from "./api-connection";

const getAll = () => {
  //gets all data
  return http.get("/magic");
};
//gets element by id
const get = (id) => {
  return http.get(`/magic/${id}`);
};
//create a new trick
const create = (data) => {
  return http.post("/magic", data);
};
//update an existing trick
const update = (id, data) => {
  return http.put(`/magic/${id}`, data);
};
//delete a listing
const remove = (id) => {
  return http.delete(`magic/${id}`);
};
//search by title
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

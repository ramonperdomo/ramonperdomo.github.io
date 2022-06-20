import api from "./api";

export default {
  list() {
    // limit filters to the data of relevance in this page (asteroids)
    // only list asteroids (kind=a)
    const queryParams = "?kind=a";

    return api.get(`cad.api${queryParams}`);
  },
};

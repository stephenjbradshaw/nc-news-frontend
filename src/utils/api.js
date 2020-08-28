import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sb-nc-news-backend.herokuapp.com/api",
});

export const getTopics = () => {
  return axiosInstance.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticles = (topic) => {
  return axiosInstance
    .get("/articles", { params: { topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

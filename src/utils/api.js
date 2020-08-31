import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sb-nc-news-backend.herokuapp.com/api",
});

export const getTopics = () => {
  return axiosInstance.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticles = (topic, sort) => {
  let sort_by;
  let order;
  if (sort === "newest") {
    sort_by = "created_at";
    order = "desc";
  } else if (sort === "oldest") {
    sort_by = "created_at";
    order = "asc";
  } else if (sort === "most_comments") {
    sort_by = "comment_count";
    order = "desc";
  } else if (sort === "least_comments") {
    sort_by = "comment_count";
    order = "asc";
  } else if (sort === "most_votes") {
    sort_by = "votes";
    order = "desc";
  } else if (sort === "least_votes") {
    sort_by = "votes";
    order = "asc";
  }
  return axiosInstance
    .get("/articles", { params: { topic, sort_by, order } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

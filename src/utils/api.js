import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sb-nc-news-backend.herokuapp.com/api",
});

export const getTopics = () => {
  return axiosInstance.get("/topics").then(({ data: { topics } }) => topics);
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
    .then(({ data: { articles } }) => articles);
};

export const patchVotes = (kind, id, change) => {
  return axiosInstance.patch(`/${kind}s/${id}`, { inc_votes: change });
};

export const getSingleArticle = (article_id) => {
  return axiosInstance
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => article);
};

export const getComments = (article_id, sort) => {
  let sort_by;
  let order;
  if (sort === "newest") {
    sort_by = "created_at";
    order = "desc";
  } else if (sort === "oldest") {
    sort_by = "created_at";
    order = "asc";
  } else if (sort === "most_votes") {
    sort_by = "votes";
    order = "desc";
  } else if (sort === "least_votes") {
    sort_by = "votes";
    order = "asc";
  }
  return axiosInstance
    .get(`/articles/${article_id}/comments`, { params: { sort_by, order } })
    .then(({ data: { comments } }) => comments);
};

export const postComment = (article_id, username, body) => {
  console.log(article_id, username, body);
  return axiosInstance
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data: { comment } }) => comment);
};

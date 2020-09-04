import React from "react";

const SortArticles = (props) => {
  const { handleSortChange, sort, className } = props;
  return (
    <section className={className}>
      <label htmlFor="sort-by">Sort articles by: </label>
      <select
        name="sort-by"
        id="sort-by"
        value={sort}
        onChange={handleSortChange}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="most_comments">Most comments</option>
        <option value="least_comments">Least comments</option>
        <option value="most_votes">Most votes</option>
        <option value="least_votes">Least votes</option>
      </select>
    </section>
  );
};

export default SortArticles;

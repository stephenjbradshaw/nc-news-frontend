import React from "react";

const SortComments = React.forwardRef((props, ref) => {
  const { handleSortChange, sort, className } = props;
  return (
    <section className={className}>
      <label htmlFor="sort-by">Sort comments by: </label>
      <select
        ref={ref}
        name="sort_by"
        id="sort_by"
        value={sort}
        onChange={handleSortChange}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="most_votes">Most votes</option>
        <option value="least_votes">Least votes</option>
      </select>
    </section>
  );
});

export default SortComments;

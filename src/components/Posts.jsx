import React from "react";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-3">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <mark className="mr-2">{post.id}</mark>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

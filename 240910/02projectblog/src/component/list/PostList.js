import React from "react";
import styled from "styled-components";
import PostListItem from "./postListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  jstify-content: center;
  align-items: flex-start;
`;

const PostList = ({ posts, onClickItem }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={() => onClickItem(post)}
        />
      ))}
    </Wrapper>
  );
};

export default PostList;

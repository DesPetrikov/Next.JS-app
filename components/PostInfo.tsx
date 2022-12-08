import React from 'react';
import { postType } from '../types';
import { Heading } from './Heading';

type PostInfoType = {
  post: postType;
}
const PostInfo: React.FC<PostInfoType> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;

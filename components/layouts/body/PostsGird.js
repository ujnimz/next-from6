import React from 'react';
import BlogItem from '../../elements/BlogItem';

const PostsGird = ({posts}) => {
  return (
    <div className='flex justify-center py-10 lg:py-14'>
      <div className='container flex justify-center flex-wrap'>
        {posts.data.map((post, index) => (
          <BlogItem post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PostsGird;

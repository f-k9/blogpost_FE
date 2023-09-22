import React from 'react';
import { useEffect, useState } from 'react';
import { BlogPost } from '../../../types/models/BlogPost.model';
import BlogPostService from '../../../Services/BlogPostService';
import BlogPostForm from '../../molecules/BlogPostForm/BlogPostForm';
import { useNavigate, useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const navigate = useNavigate();
  const { blogPostId } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost>({
    id: '',
    title: '',
    text: '',
    user: { id: '', firstName: '', lastName: '', email: '', roles: [] },
    categoryId: [],
  });

  useEffect(() => {
    return () => {
      if (blogPostId) {
        BlogPostService.getBlogPost(blogPostId).then((res) => {
          return setBlogPost(res);
        });
      }
    };
  }, [blogPostId]);

  const submitActionHandler = (values: BlogPost) => {
    if (blogPostId !== undefined) {
      BlogPostService.updateBlogPost(values).then(() => {
        navigate('../blogedit');
      });
    } else {
      BlogPostService.addBlogPost(values).then(() => {
        navigate('/blogedit');
      });
    }
  };

  return <BlogPostForm blogPost={blogPost} submitActionHandler={submitActionHandler} />;

};

export default BlogPostPage;

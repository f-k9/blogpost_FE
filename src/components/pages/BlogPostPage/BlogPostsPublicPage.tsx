import React from 'react';
import { useEffect, useState } from 'react';
import { BlogPost } from '../../../types/models/BlogPost.model';
import BlogPostService from '../../../Services/BlogPostService';
import Card from '@mui/joy/Card/Card';
import CardContent from '@mui/joy/CardContent/CardContent';
import { Typography } from '@mui/material';

const BlogPostsPublicPage = () => {
    const [blopPosts, setBlogPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        BlogPostService.getAllBlogPosts().then((data) => {
            setBlogPosts(data.data);
            console.log(data.data)
        });
    }, []);

    return (
        <>
            {blopPosts.map((blogPost) => (
                <div key={blogPost.id}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography>
                                Title: {blogPost.title}
                            </Typography>
                            <Typography>
                                Text: {blogPost.text}
                            </Typography>
                            <Typography>
                                By: {blogPost.user.firstName} {blogPost.user.lastName}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </>
    );
};

export default BlogPostsPublicPage;

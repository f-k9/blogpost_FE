import api from '../config/Api';
import { BlogPost } from '../types/models/BlogPost.model';

const BlogPostService = {
    getBlogPost: async (id: string): Promise<BlogPost> => {
        const { data } = await api.get<BlogPost>(`/blogs/${id}`);
        return data;
    },

    updateBlogPost: (blogPost: BlogPost) => {
        return api.put(`/blogs/${blogPost.id}`, blogPost);
    },

    addBlogPost: (blogPost: BlogPost) => {
        return api.post('/blogs/', blogPost).then((res) => {
            return res.data;
        });
    },

    getAllBlogPosts: () => {
        return api.get('/blogs/');
    },

    deleteBlogPost: (id: string) => {
        return api.delete(`/blogs/${id}`);
    },
};

export default BlogPostService;
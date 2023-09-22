import { useFormik } from 'formik';
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { BlogPost } from '../../../types/models/BlogPost.model';

interface BlogPostProps {
  blogPost: BlogPost;
  submitActionHandler: (values: BlogPost) => void;
}

const BlogPostForm = ({ blogPost, submitActionHandler }: BlogPostProps) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: blogPost.id,
      title: blogPost ? blogPost.title : '',
      text: blogPost ? blogPost.text : '',
      user: blogPost ? blogPost.user : { id: '', email: '', firstName: '', lastName: '', roles: [] },
      categoryId: blogPost ? blogPost.categoryId : [],
    },
    validationSchema: object({
      title: string().required().min(2).max(20),
      text: string().required().min(2).max(100),
      /* ADD VALIDATION FOR CATEGORY */
    }),
    onSubmit: (values: BlogPost) => {
      submitActionHandler(values);
      console.log(values)
    },
    enableReinitialize: true,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1>Create Blog Post</h1>
        <Box sx={{ paddingTop: '15px' }}>
          <TextField
            id='title'
            label='Title'
            variant='outlined'
            sx={{ paddingRight: '10px' }}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.title && formik.errors.title)}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title ? (
            <div style={{ color: 'red' }}>{formik.errors.title}</div>
          ) : null}
          <TextField
            id='text'
            label='Text'
            variant='outlined'
            sx={{ paddingRight: '10px' }}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.text && formik.errors.text)}
            value={formik.values.text}
          />
          {formik.errors.text && formik.touched.text ? (
            <div style={{ color: 'red' }}>{formik.errors.text}</div>
          ) : null}
          <Autocomplete
            disablePortal
            id="category"
            options={blogPost.categoryId.map(category => category.name)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
        </Box>
        <div>
          <Button
            sx={{ marginTop: '15px', marginRight: '10px' }}
            variant='contained'
            color='success'
            type='submit'
            disabled={!(formik.dirty && formik.isValid)}
          >
            {blogPost.id && 'Save'}
            {!blogPost.id && 'Add'}
          </Button>
          <Button
            sx={{ marginTop: '15px' }}
            variant='contained'
            color='error'
            onClick={() => {
              navigate('/blogposts');
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default BlogPostForm;

import { Box, flexbox } from '@mui/system';
import Button from '@mui/material/Button/Button';
import logo from '../../../logo1.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const btnstyle = { margin: '8px 0', outerWidth: '34%' };
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  }

  const handleClickBlogs = () => {
    navigate('/blogs');
  }

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection={'column'}
    >
      <h1>Welcome to the Homepage of OurSpace</h1>
      <Button
        type='submit'
        color='primary'
        variant='contained'
        style={btnstyle}
        onClick={handleClickBlogs}
      >
        Blogs
      </Button>
      <img
        src={logo}
        style={{ filter: 'invert(100%)' }}
        className='App-logo'
        alt='logo'
      />
      <Button
        type='submit'
        color='primary'
        variant='contained'
        style={btnstyle}
        onClick={handleClickLogin}
      >
        Login
      </Button>
    </Box>
  );
}

export default HomePage;

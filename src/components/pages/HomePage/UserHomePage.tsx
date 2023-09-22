import { Box, flexbox } from '@mui/system';
import logo from '../../../logo1.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserHomePage = () => {
  const btnstyle = { margin: '8px 0', outerWidth: '34%' };
  const navigate = useNavigate();
  const userJSON = localStorage.getItem('user');
  const user = userJSON ? JSON.parse(userJSON) : null;

  const handleClick = () => {
    navigate('/dashboard/' + user.id);
  }

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection={'column'}
    >
      <h1>Welcome to the User Homepage of OurSpace</h1>
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
        onClick={handleClick}
      >
        Blog Posts
      </Button>
    </Box>
  );
}

export default UserHomePage;
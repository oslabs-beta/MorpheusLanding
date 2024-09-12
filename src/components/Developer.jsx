import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import brianPhoto from '../assets/Brian.png';
import dariusPhoto from '../assets/Darius.png';
import jasenPhoto from '../assets/Jasen.png';
import kaiPhoto from '../assets/Kai.png';
import santiagoPhoto from '../assets/Santiago.png';

export const developers = [
  {
    name: 'Brian Nguyen',
    email: 'nguyenbrian2323@gmail.com',
    github: 'https://github.com/BrianNguyen2323',
    linkedin: 'https://www.linkedin.com/in/ngynbrian/',
    photo: brianPhoto,
  },
  {
    name: 'Darius Teng',
    email: 'dariusyteng@gmail.com',
    github: 'https://github.com/dariusteng',
    linkedin: 'https://www.linkedin.com/in/dariusteng/',
    photo: dariusPhoto,
  },
  {
    name: 'Jasen Tenney',
    email: 'jasen.tenney@gmail.com',
    github: 'https://github.com/jntenney',
    linkedin: 'https://www.linkedin.com/in/jasentenney/',
    photo: jasenPhoto,
  },
  {
    name: 'Kai Jiang',
    email: 'kaixinjiang66@gmail.com',
    github: 'https://github.com/kaij6',
    linkedin: 'www.linkedin.com/in/kai-jiang-9545a3295',
    photo: kaiPhoto,
  },
  {
    name: 'Santiago Cravino',
    email: 'Snc100@scarletmail.rutgers.edu',
    github: 'https://github.com/cravinos',
    linkedin: 'https://www.linkedin.com/in/santiago-cravino/',
    photo: santiagoPhoto,
  },
];

const Developer = ({ name, email, github, linkedin, photo }) => (
  <Card
    sx={{
      maxWidth: 205,
      minWidth: 200,
      m: 1,
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)', // Broader shadow
      transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transform: 'translateY(-2px)', // Float effect on hover
        boxShadow: '0 12px 20px rgba(0,0,0,0.3)', // Larger shadow on hover
      },
      '& .MuiTypography-root': {
        color: 'black',
      },
      '& .MuiIconButton-root': {
        color: 'black',
      },
    }}
  >
    <Avatar
      src={photo}
      sx={{
        width: 180,
        height: 180,
        mx: 'auto',
        my: 1,
        border: '3px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '3%',
      }}
    />
    <CardContent>
      <Typography gutterBottom variant='h6' component='div'>
        {name}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <IconButton
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          sx={{ color: 'black' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href={`mailto:${email}`}
          target='_blank'
          rel='noopener noreferrer'
          sx={{ color: 'black' }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          href={linkedin}
          target='_blank'
          rel='noopener noreferrer'
          sx={{ color: 'black' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

Developer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Developer;

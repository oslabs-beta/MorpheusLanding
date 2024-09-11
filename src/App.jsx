import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
  Link,
  IconButton,
} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { alpha } from '@mui/material/styles';
import Developer, { developers } from './components/Developer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from './assets/16.svg';
// import { useRef } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Avenir, sans-serif',
  },
});

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.3),
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  color: theme.palette.text.primary,
  '& .MuiToolbar-root': {
    minHeight: '72px', // Adjust this value to your desired height
    '@media (min-width:0px) and (orientation: landscape)': {
      minHeight: '72px',
    },
    '@media (min-width:600px)': {
      minHeight: '72px',
    },
  },
}));

const GlassyBox = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
}));

const GradientBackground = styled(Box)({
  background: 'linear-gradient(-45deg, #FE6B8B 30%, #FF8E53 90%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
});

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(100px, 100px) rotate(10deg); }
  50% { transform: translate(0, 200px) rotate(0deg); }
  75% { transform: translate(-100px, 100px) rotate(-10deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const FloatingLogo = styled('img')({
  position: 'absolute',
  opacity: 0.2,
  animation: `${float} 10s infinite ease-in-out`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    opacity: 0.5,
    transform: 'scale(1.1)',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GradientBackground>
        <FloatingLogo
          src={Logo}
          style={{
            top: '10%',
            right: '10%',
            width: '100px',
            animationDuration: '15s',
          }}
        />
        <FloatingLogo
          src={Logo}
          style={{
            top: '30%',
            left: '5%',
            width: '80px',
            animationDuration: '20s',
            animationDelay: '-5s',
          }}
        />
        <FloatingLogo
          src={Logo}
          style={{
            bottom: '15%',
            left: '15%',
            width: '120px',
            animationDuration: '25s',
            animationDelay: '-10s',
          }}
        />
        <TransparentAppBar position='fixed'>
          <Toolbar>
            <img
              src={Logo}
              alt='Logo'
              style={{ width: '60px', height: '60px', marginRight: '8px' }}
            />
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, fontSize: '1.6rem' }}
            >
              morpheus
            </Typography>
            <Button color='inherit' href='#' sx={{ fontSize: '1.1rem', mx: 1 }}>
              Home
            </Button>
            <Button
              color='inherit'
              href='#demo'
              sx={{ fontSize: '1.1rem', mx: 1 }}
            >
              Features
            </Button>
            <Button
              color='inherit'
              href='#team'
              sx={{ fontSize: '1.1rem', mx: 1 }}
            >
              Team
            </Button>

            <IconButton
              color='inherit'
              href='https://github.com/oslabs-beta/Morpheus'
              target='_blank'
              rel='noopener noreferrer'
              sx={{ ml: 1.5 }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color='inherit'
              href='#' // Temporary LinkedIn placeholder ------------------------------------------------------------------
              target='_blank'
              rel='noopener noreferrer'
              sx={{ ml: 2.5, mr: 1.5 }}
            >
              <LinkedInIcon />
            </IconButton>
          </Toolbar>
        </TransparentAppBar>

        <Container
          maxWidth='lg'
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* <GlassyBox> */}
          <Typography
            variant='h1'
            component='h1'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            {/* Chrysalis to Clarity <br /> */}
            AI-enhanced container observability
          </Typography>
          <Typography variant='h4' component='h2' gutterBottom>
            Transform your Docker and Kubernetes workflow with Morpheus.
          </Typography>
          <Typography variant='body1' paragraph>
            This intuitive observability and management tool allow you to
            effortlessly monitor essential container metrics on a sleek
            dashboard, and manage containers with easy one-click actions.
            Visualize Kubernetes clusters with intuitive graphics. Unlock
            advanced analysis with optional AI interactions powered by AWS
            Bedrock and OpenAI models of your choice, transforming insights into
            actionable intelligence.
          </Typography>
          <Button
            href='https://github.com/oslabs-beta/Morpheus'
            target='_blank'
            rel='noopener noreferrer'
            variant='contained'
            size='large'
            sx={{
              backgroundColor: alpha('#9C27B0', 0.6), // Light purple with 60% opacity
              color: 'white',
              '&:hover': {
                backgroundColor: alpha('#9C27B0', 0.8), // Darker on hover
              },
              alignSelf: 'flex-start', // Aligns the button to the start of the flex container
              mt: 2, // Adds some top margin
            }}
          >
            Get Started
          </Button>
          {/* </GlassyBox> */}
        </Container>

        {/* placeholder for demo */}
        <Container
          Container
          id='demo'
          maxWidth='md'
          sx={{ mb: 5, scrollMarginTop: '80px' }}
        >
          <GlassyBox>
            <Typography variant='h5' component='h2' gutterBottom>
              Demo Feature 1
            </Typography>
            <Typography variant='body1' paragraph>
              This is a placeholder for additional content.
            </Typography>
          </GlassyBox>
        </Container>

        {/* placeholder for demo */}
        <Container maxWidth='md' sx={{ mb: 5 }}>
          <GlassyBox>
            <Typography variant='h5' component='h2' gutterBottom>
              Demo Feature 2
            </Typography>
            <Typography variant='body1' paragraph>
              This is another placeholder for additional content.
            </Typography>
          </GlassyBox>
        </Container>

        {/* placeholder for demo */}
        <Container maxWidth='md' sx={{ mb: 5 }}>
          <GlassyBox>
            <Typography variant='h5' component='h2' gutterBottom>
              Demo Feature 3
            </Typography>
            <Typography variant='body1' paragraph>
              This is another placeholder for additional content.
            </Typography>
          </GlassyBox>
        </Container>

        <Box flexGrow={1} />

        <Container
          maxWidth={false}
          sx={{ width: '100%', maxWidth: '2000px', mt: 5, mb: 8, mx: 'auto' }}
        >
          <Typography
            id='team'
            variant='h4'
            component='h2'
            gutterBottom
            sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
          >
            Meet the Developers
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // Changed back from 'space-around' to 'center'
              flexWrap: 'wrap',
              gap: 2, // Reduced gap for a more compact layout
            }}
          >
            {developers.map((dev) => (
              <Developer key={dev.name} {...dev} />
            ))}
          </Box>
        </Container>
        <Box
          component='footer'
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant='body2' color='text.secondary' align='center'>
            © 2024 Morpheus | Developed at OSLabs |
            <Link
              color='inherit'
              href='https://opensource.org/licenses/MIT'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' MIT License'}
            </Link>
          </Typography>
        </Box>
      </GradientBackground>
    </ThemeProvider>
  );
}

export default App;

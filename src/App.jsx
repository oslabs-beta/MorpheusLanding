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
import Logo from './assets/4.svg'; // Floating logo
import LogoWithText from './assets/11.svg'; // Nav bar logo with text
import { useState, useEffect, useRef } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Avenir, sans-serif',
  },
});

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.5),
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
      position: 'relative',
    },
  },
}));

// Used for Features boxes
const GlassyBox = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
}));

const GradientBackground = styled(Box)({
  // background: 'linear-gradient(-45deg, #FE6B8B 30%, #FF8E53 90%)', // Orange-red
  // background: 'linear-gradient(120deg, #b7c9ff 0%, #94b9ff 100%)', // Purple blue, little contrast
  // background: 'linear-gradient(120deg, #d2d8ff 0%, #5e97cb 100%)', // Purple blue
  background: 'linear-gradient(120deg, #cdfbff 0%, #94b9ff 100%)', // Bright blue
  // background: 'linear-gradient(120deg, #cdf0ff 0%, #8094ff 100%)', // Strong contrast
  // background: 'linear-gradient(120deg, #ace6ff 0%, #8094ff 100%)', // Little contrast
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
});

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(150px, 150px) rotate(30deg); }
  50% { transform: translate(0, 300px) rotate(0deg); }
  75% { transform: translate(-150px, 150px) rotate(-30deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const FloatingLogo = styled('img')({
  position: 'absolute',
  opacity: 0.4,
  animation: `${float} 8s infinite ease-in-out`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.5)',
  },
});

// fadeInUp and AnimatedContainer are for the fade effect when scrolling down to Features and Team sections
const AnimatedContainer = styled(Container)`
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  will-change: opacity, transform;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GradientBackground>
        {/* Floating logos ---------------------------------------------------------------------------- */}
        <FloatingLogo
          src={Logo}
          style={{
            top: '10%',
            right: '10%',
            width: '100px',
            animationDuration: '21s',
            animationDelay: '-5s',
          }}
        />
        <FloatingLogo
          src={Logo}
          style={{
            top: '20%',
            left: '5%',
            width: '90px',
            animationDuration: '17s',
          }}
        />
        <FloatingLogo
          src={Logo}
          style={{
            top: '40%',
            right: '5%',
            width: '85px',
            animationDuration: '23s',
            animationDelay: '-11s',
          }}
        />
        <FloatingLogo
          src={Logo}
          style={{
            bottom: '40%',
            left: '15%',
            width: '100px',
            animationDuration: '19s',
            animationDelay: '-9s',
          }}
        />

        {/* Nav bar --------------------------------------------------------------------------------- */}
        <TransparentAppBar position='fixed'>
          <Toolbar>
            <Box
              component='a'
              href='#'
              sx={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                height: '240px', // Size for upper left corner logo with text
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={LogoWithText} // Logo with text
                alt='Morpheus Logo'
                style={{ height: '100%' }}
              />
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Button color='inherit' href='#' sx={{ fontSize: '1.1rem', mx: 1 }}>
              Home
            </Button>
            <Button
              color='inherit'
              href='#features'
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
              href='#' // Temporary Morpheus LinkedIn placeholder ---------------------------------------------------------------------------------------
              target='_blank'
              rel='noopener noreferrer'
              sx={{ ml: 2.5, mr: 1.5 }}
            >
              <LinkedInIcon />
            </IconButton>
          </Toolbar>
        </TransparentAppBar>

        {/* Home section ---------------------------------------------------------------------------- */}
        <Container
          maxWidth='lg'
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mb: 20,
          }}
        >
          {/* <GlassyBox> */}
          <Typography
            variant='h1'
            component='h1'
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#000000' }}
            // sx={{ fontWeight: 'bold' }}
          >
            AI-enhanced container observability
          </Typography>
          <Typography
            variant='h4'
            component='h2'
            sx={{ color: '#000000' }}
            gutterBottom
          >
            Transform your Docker and Kubernetes workflow with Morpheus.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button
              href='#features'
              variant='contained'
              size='large'
              sx={{
                // backgroundColor: alpha('#9C27B0', 0.6),  // Purple
                // backgroundColor: alpha('#38b6ff', 0.6),  // Light blue
                backgroundColor: alpha('#1d63ed', 0.75), // Blue
                color: 'white',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: alpha('#1d63ed', 1),
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Learn More
            </Button>
            <Button
              href='https://github.com/oslabs-beta/Morpheus'
              target='_blank'
              rel='noopener noreferrer'
              variant='contained'
              size='large'
              sx={{
                // backgroundColor: alpha('#9C27B0', 0.6),  // Purple
                // backgroundColor: alpha('#38b6ff', 0.6),  // Light blue
                backgroundColor: alpha('#1d63ed', 0.75), // Blue
                color: 'white',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: alpha('#1d63ed', 1),
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>

        {/* Features section ------------------------------------------------------------------------ */}
        <AnimatedContainer
          id='features'
          maxWidth='lg'
          sx={{
            py: 5,
            mb: 30,
            scrollMarginTop: '80px',
          }}
          ref={(el) => {
            if (!el) return;
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  el.classList.add('visible');
                } else {
                  el.classList.remove('visible');
                }
              },
              {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px',
              }
            );
            observer.observe(el);

            return () => observer.unobserve(el);
          }}
        >
          <Typography
            variant='h3'
            component='h2'
            gutterBottom
            sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
          >
            An All-in-One Solution
          </Typography>

          <Box sx={{ mb: 6, maxWidth: '1000px', mx: 'auto' }}>
            <Typography
              variant='h5'
              component='h3'
              gutterBottom
              sx={{ textAlign: 'center' }}
            >
              Know your whats, whens, and whys. Morpheus combines powerful
              observability features to not only give you real-time and
              historical metrics, but also in-depth understanding of this data.
              Whether you are a seasoned DevOps professional or just starting
              with containerization, Morpheus provides the insights and control
              you need to optimize your workflow.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <GlassyBox sx={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <Typography variant='h5' component='h3' gutterBottom>
                Container Metrics Dashboard
              </Typography>
              <Typography variant='body1' paragraph>
                Monitor essential container metrics on a sleek, intuitive
                dashboard for real-time insights into your Docker and Kubernetes
                environments.
              </Typography>
            </GlassyBox>
            <GlassyBox sx={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <Typography variant='h5' component='h3' gutterBottom>
                One-Click Container Management
              </Typography>
              <Typography variant='body1' paragraph>
                Effortlessly manage your containers with easy-to-use, one-click
                actions for starting, stopping, and restarting containers.
              </Typography>
            </GlassyBox>
            <GlassyBox sx={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <Typography variant='h5' component='h3' gutterBottom>
                AI-Powered Analysis
              </Typography>
              <Typography variant='body1' paragraph>
                Leverage advanced AI interactions with models provided through
                AWS Bedrock and OpenAI models to transform insights into
                actionable intelligence.
              </Typography>
            </GlassyBox>
          </Box>
        </AnimatedContainer>

        {/* Team section ---------------------------------------------------------------------------- */}
        <Container
          maxWidth={false}
          sx={{ width: '100%', maxWidth: '1500px', mt: 4, mb: 50, mx: 'auto' }}
        >
          <Typography
            id='team'
            variant='h3'
            component='h2'
            gutterBottom
            sx={{
              textAlign: 'center',

              fontWeight: 'bold',
              py: 5,
              scrollMarginTop: '80px',
            }}
          >
            Meet the Developers
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {developers.map((dev) => (
              <Developer key={dev.name} {...dev} />
            ))}
          </Box>
        </Container>

        {/* Footer ---------------------------------------------------------------------------------- */}
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

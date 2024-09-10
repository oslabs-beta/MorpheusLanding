import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Paper,
} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { alpha } from '@mui/material/styles';

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
    minHeight: '48px', // Adjust this value to your desired height
    '@media (min-width:0px) and (orientation: landscape)': {
      minHeight: '48px',
    },
    '@media (min-width:600px)': {
      minHeight: '48px',
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
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
          src='/16.svg'
          style={{
            top: '10%',
            left: '5%',
            width: '100px',
            animationDuration: '15s',
          }}
        />
        <FloatingLogo
          src='/16.svg'
          style={{
            top: '30%',
            right: '10%',
            width: '80px',
            animationDuration: '20s',
            animationDelay: '-5s',
          }}
        />
        <FloatingLogo
          src='/16.svg'
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
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              morpheus
            </Typography>
            <Button color='inherit' href='#about'>
              About
            </Button>
          </Toolbar>
        </TransparentAppBar>

        <Container maxWidth='md' sx={{ mt: 8, mb: 8 }}>
          <GlassyBox>
            <Typography variant='h2' component='h1' gutterBottom>
              AI enhanced container observability
            </Typography>
            <Typography variant='h5' component='h2' gutterBottom>
              Empower your development workflow
            </Typography>
            <Typography variant='body1' paragraph>
              DevTool is a powerful suite of utilities designed to streamline
              your development process.
            </Typography>
            <Button variant='contained' color='primary' size='large'>
              Get Started
            </Button>
          </GlassyBox>
        </Container>

        {/* placeholder for demo */}
        <Container maxWidth='md' sx={{ mb: 8 }}>
          <GlassyBox>
            <Typography variant='h4' component='h2' gutterBottom>
              Placeholder Container 1
            </Typography>
            <Typography variant='body1' paragraph>
              This is a placeholder for additional content. You can replace this
              with any information or components you'd like to display.
            </Typography>
          </GlassyBox>
        </Container>

        {/* placeholder for demo */}
        <Container maxWidth='md' sx={{ mb: 8 }}>
          <GlassyBox>
            <Typography variant='h4' component='h2' gutterBottom>
              Placeholder Container 2
            </Typography>
            <Typography variant='body1' paragraph>
              This is another placeholder for additional content. Feel free to
              customize this section as needed.
            </Typography>
          </GlassyBox>
        </Container>

        {/* placeholder for demo */}
        <Container maxWidth='md' sx={{ mb: 8 }}>
          <GlassyBox>
            <Typography variant='h4' component='h2' gutterBottom>
              Placeholder Container 3
            </Typography>
            <Typography variant='body1' paragraph>
              This is another placeholder for additional content. Feel free to
              customize this section as needed.
            </Typography>
          </GlassyBox>
        </Container>

        <Box flexGrow={1} />

        <Container maxWidth='md' sx={{ mb: 8 }}>
          <GlassyBox id='about'>
            <Typography variant='h4' component='h2' gutterBottom>
              About DevTool
            </Typography>
            <Typography variant='body1' paragraph>
              DevTool was created by developers, for developers. Our mission is
              to provide a comprehensive set of tools that enhance productivity
              and simplify complex tasks.
            </Typography>
          </GlassyBox>
        </Container>
      </GradientBackground>
    </ThemeProvider>
  );
}

export default App;

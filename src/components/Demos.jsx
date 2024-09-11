import PropTypes from 'prop-types';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

const DemoContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(40),
  opacity: 0,
  transform: 'translateX(100px)',
  transition: 'opacity 1s ease-out, transform 1s ease-out',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const DemoContent = styled(Box)(({ theme }) => ({
  flex: '0 0 35%',
  padding: theme.spacing(4),
}));

const DemoGif = styled('img')(({ theme }) => ({
  maxWidth: '65%',
  width: '65%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    marginBottom: theme.spacing(4),
  },
}));

const Demos = ({ title, description, gifSrc, reverse }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      if (isVisible) {
        containerRef.current.style.opacity = '1';
        containerRef.current.style.transform = 'translateX(0)';
      } else {
        containerRef.current.style.opacity = '0';
        containerRef.current.style.transform = reverse
          ? 'translateX(-100px)'
          : 'translateX(100px)';
      }
    }
  }, [isVisible, reverse]);

  return (
    <DemoContainer
      maxWidth='lg'
      ref={containerRef}
      sx={{
        transform: reverse ? 'translateX(-100px)' : 'translateX(100px)',
      }}
    >
      {reverse ? (
        <>
          <DemoContent>
            <Typography variant='h4' gutterBottom>
              {title}
            </Typography>
            <Typography variant='body1'>{description}</Typography>
          </DemoContent>
          <DemoGif src={gifSrc} alt={title} />
        </>
      ) : (
        <>
          <DemoGif src={gifSrc} alt={title} />
          <DemoContent>
            <Typography variant='h4' gutterBottom>
              {title}
            </Typography>
            <Typography variant='body1'>{description}</Typography>
          </DemoContent>
        </>
      )}
    </DemoContainer>
  );
};

Demos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gifSrc: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

Demos.defaultProps = {
  reverse: false,
};

export default Demos;

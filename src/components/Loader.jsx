import { keyframes, styled } from "@mui/material";

const ringKeyframes = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const RingLoader = styled('div')({
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',
});

const RingLoaderChild = styled('div')({
  boxSizing: 'border-box',
  display: 'block',
  position: 'absolute',
  width: '34px',
  height: '34px',
  margin: '22px',
  border: '4px solid #04a0dd',
  borderRadius: '50%',
  animation: `${ringKeyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  borderColor: '#04a0dd transparent transparent transparent',
  '&:nth-child(1)': {
    animationDelay: '-0.45s',
  },
  '&:nth-child(2)': {
    animationDelay: '-0.3s',
  },
  '&:nth-child(3)': {
    animationDelay: '-0.15s',
  },
});

const Loader = () => {
  return (
    <>
      <RingLoader>
        <RingLoaderChild></RingLoaderChild>
        <RingLoaderChild></RingLoaderChild>
        <RingLoaderChild></RingLoaderChild>
        <RingLoaderChild></RingLoaderChild>
      </RingLoader>
    </>
  );
};

export default Loader;

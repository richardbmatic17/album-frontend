import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  bgParallax: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: props => `url(${props.parallaxImage})`,
    minHeight: '100vh',
    display: 'flex',
  },
  span: {
    padding: '20px',
    backgroundColor: 'black',
    opacity: '.5',
    color: 'white',
    fontSize: 'x-large',
    fontWeight: '900',
  }
}));
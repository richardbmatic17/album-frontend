import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  bgParallax: {
    backgroundAttachment: 'fixed',
    backgroundImage: props => `url(${props.parallaxImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    minHeight: 'calc(100vh - 70px)',
    margin: '10px auto',
    // borderRadius: '10px',
    maxWidth: '1128px',
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
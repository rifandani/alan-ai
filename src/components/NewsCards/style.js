import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  container: {
    padding: '0 5%',
    width: '100%',
    margin: 0,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  root: {
    width: '100%',
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
    flexBasis: '33.33%',
    flexShrink: 0,
    color: 'white',
  },
  secondaryHeading: {
    fontSize: 18,
    color: 'white',
  },
  info: {
    fontSize: 18,
    color: 'white',
    letterSpacing: 2,
  },
  middle: {
    marginTop: 20,
  },
  weather: {
    marginTop: 50,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  weatherCard: {
    maxWidth: 300,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

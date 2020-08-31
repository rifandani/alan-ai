import React, { useState } from 'react';
import {
  Grid,
  Grow,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Avatar,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
// files
import useStyles from './style';
import NewsCard from '../NewsCard';
import { infoCards, weatherCards } from './infoCards';

const NewsCards = ({ articles, activeArticle, weather }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (weather)
    return (
      <motion.Container
        maxWidth="lg"
        className={classes.weather}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, ease: 'linear' }}
        whileHover={{
          scale: 1.2,
        }}
      >
        <Card className={classes.weatherCard}>
          <Avatar
            variant="rounded"
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.desc}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              <strong style={{ color: '#f2b5d4' }}>{weather.desc}</strong> in{' '}
              <strong style={{ color: '#3a86ff' }}>{weather.name}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Temp: <strong style={{ color: '#fb5607' }}>{weather.temp}</strong>
              <br />
              Humidity:{' '}
              <strong style={{ color: '#9e2a2b' }}>{weather.humidity}</strong>
              <br />
              Pressure:{' '}
              <strong style={{ color: '#f6bd60' }}>{weather.pressure}</strong>
              <br />
              Wind Speed:{' '}
              <strong style={{ color: '#2ec4b6' }}>{weather.wind_speed}</strong>
            </Typography>
          </CardContent>
        </Card>
      </motion.Container>
    );

  // when there are no articles
  if (!articles.length)
    return (
      <Grow in className={classes.middle}>
        <Container maxWidth="lg">
          <Typography
            color="primary"
            variant="h5"
            style={{ marginBottom: 10, textAlign: 'center' }}
          >
            <FindInPageIcon /> News <FindInPageIcon />
          </Typography>

          {infoCards.map((infoCard, i) => (
            <Accordion
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
              key={i}
              style={{ backgroundColor: infoCard.color }}
              className={classes.root}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                aria-controls={`panel${i}bh-content`}
                id={`panel${i}bh-header`}
              >
                <Typography className={classes.heading}>
                  {infoCard.title}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Try saying: {infoCard.text}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.info}>
                  {infoCard.info}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          <Typography
            color="secondary"
            variant="h5"
            style={{ marginTop: 20, marginBottom: 10, textAlign: 'center' }}
          >
            <WbSunnyIcon /> Weather <WbSunnyIcon />
          </Typography>

          {weatherCards.map((weatherCard, i) => (
            <Accordion
              expanded={expanded === `panel-weather${i}`}
              onChange={handleChange(`panel-weather${i}`)}
              key={i}
              style={{ backgroundColor: weatherCard.color }}
              className={classes.root}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                aria-controls={`panel-weather${i}bh-content`}
                id={`panel-weather${i}bh-header`}
              >
                <Typography className={classes.heading}>
                  {weatherCard.title}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Try saying: {weatherCard.text}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.info}>
                  {weatherCard.info}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Grow>
    );

  return (
    <Grow in>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        {articles.map((article, i) => (
          <Grid
            item
            key={i}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: 'flex' }}
          >
            <NewsCard article={article} i={i} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;

import React, { useState, useEffect, createRef } from 'react';
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import classNames from 'classnames';
// files
import useStyles from './style';

const NewsCard = ({ article, i, activeArticle }) => {
  const classes = useStyles();

  const { description, publishedAt, source, title, url, urlToImage } = article;
  const errorImage = 'https://i.ibb.co/rFXqd2j/corona.jpg';

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50); // 0 x-Axis

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef()),
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[i]}
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null,
      )}
    >
      <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
        <CardMedia image={urlToImage || errorImage} className={classes.media} />

        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>

        <Typography gutterBottom variant="h5" className={classes.title}>
          {title}
        </Typography>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Details...
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;

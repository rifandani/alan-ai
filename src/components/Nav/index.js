import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 10,
  },
  navLogo: {
    marginRight: 20,
  },
}));

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="Alan AI"
            src="https://alan.app/voice/images/previews/preview.jpg"
            className={classes.navLogo}
          />

          <Typography variant="h6" className={classes.title}>
            Weather & News Portal
          </Typography>

          <a href="https://www.linkedin.com/in/rifandani">
            <IconButton aria-label="LinkedIn" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </a>

          <a href="https://github.com/rifandani">
            <IconButton aria-label="GitHub" color="inherit">
              <GitHubIcon />
            </IconButton>
          </a>

          <a href="https://rifandani-blog.netlify.app">
            <IconButton aria-label="Language" color="inherit">
              <LanguageIcon />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default index;

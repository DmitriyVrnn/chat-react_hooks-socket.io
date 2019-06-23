import React from 'react'

import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles/index";

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const ChatWindow = ({allChats}) => {
  const classes = useStyles();

  return (
      allChats.map((chat, i) => (
          <div className={classes.flex} key={i}>
            <Chip label={chat.from} className={classes.chip}/>
            <Typography gutterBottom>{chat.msg}</Typography>
          </div>
      ))
  )
};

export default ChatWindow;
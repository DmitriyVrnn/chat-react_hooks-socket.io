import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from "@material-ui/core/styles/index";


const useStyles = makeStyles({
  stick: {
    marginLeft: '-16px'
  },
});

const TopicWindow = ({topics, changeActiveTopic}) => {
  const classes = useStyles();

  return (
      <div className={classes.stick}>
        <List>
          {
            topics.map(topic => (
                <ListItem onClick={(e) => changeActiveTopic(e.target.innerText)} key={topic} button>
                  <ListItemText primary={topic}/>
                </ListItem>
            ))
          }
        </List>
      </div>
  )
};

export default TopicWindow;
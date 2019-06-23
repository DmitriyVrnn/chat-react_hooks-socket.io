import React, { useState, useContext } from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import TopicWindow from '../TopicWindow';
import ChatWindow from '../ChatWindow';

import {CTX} from '../../Store';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    margin: '50px auto',
    padding: theme.spacing(3, 2),
    width: '50%'
  },
  flex: {
    display: 'flex',
  },
  borderBottom: {
    borderBottom: '1px solid gray',
    paddingBottom: '20px',
  },
  topicsWindow: {
    marginTop: '30px',
    width: '20%',
    height: '300px',
    borderRight: '1px solid gray',
    marginRight: '18px',
  },
  chatWindow: {
    marginTop: '30px',
    width: '80%',
    height: '300px',
    overflowY: 'auto'
  },
  button: {
    width: '15%',
    marginRight: '57px',
    marginLeft: 'auto',
    display: 'flex'
  },
  chatBox: {
    width: '85%',
  },
  input: {
    marginLeft: 'auto',
    marginRight: '0',
    width: '85%',
  }
}));

const Dashboard = () => {
  const {allChats, sendChatAction, user} = useContext(CTX);
  const topics = Object.keys(allChats);

  //local state
  const [textValue, changeTextValue] = useState('');
  const [activeTopic, changeActiveTopic] = useState(topics[0]);

  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        <div>
          <Typography variant="h5" component="h3">
            Chat
          </Typography>
          <Typography component="p">
            <div className={classes.borderBottom}>
              {`#${activeTopic}`}
            </div>
          </Typography>
        </div>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <TopicWindow topics={topics}
                         changeActiveTopic={changeActiveTopic}/>
          </div>
          <div className={classes.chatWindow}>
            <ChatWindow allChats={allChats[activeTopic]}/>
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.input}>
            <TextField
                label="Send a chat"
                className={classes.chatBox}
                value={textValue}
                onChange={(e) => changeTextValue(e.target.value)}
                margin="normal"
            />
          </div>
        </div>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              sendChatAction({from: user, msg: textValue, topic: activeTopic});
              changeTextValue('');
            }}
        >
          Send
        </Button>
      </Paper>
  );
};

export default Dashboard;
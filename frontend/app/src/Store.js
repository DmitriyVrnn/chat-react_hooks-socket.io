import React, { useReducer, createContext } from 'react';
import io from 'socket.io-client';

export const CTX = createContext();
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const initialState = {
  main: [
    {
      from: 'user1',
      msg: 'Hello, World!',
    },
    {
      from: 'user2',
      msg: 'Hello',
    },
    {
      from: 'user3',
      msg: 'Hi!',
    }
  ],

  games: [
    {
      from: '#Games-Bot',
      msg: '#Welcome to the gaming channel',
    },
  ],

  movies: [
    {
      from: '#Movies-Bot',
      msg: '#Welcome to the channel about cinema',
    },
  ]
};

const reducer = (state, action) => {
  const {from, msg, topic} = action.payload;
  switch (action.type) {
    case 'RECEIVE_MESSAGE' :
      return {
        ...state,
        [topic]: [
          ...state[topic],
          {
            from,
            msg
          }
        ]
      };
    default:
      return state
  }
};

const getRandomNameUser = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

let socket;

const sendChatAction = (value) => {
  socket.emit('chat message', value);
};

const Store = ({children}) => {
  const [allChats, dispatch] = useReducer(reducer, initialState);

  if (!socket) {
    socket = io(':3001');
    socket.on('chat message', (msg) => {
      dispatch({type: RECEIVE_MESSAGE, payload: msg})
    })
  }

  const arrUserName = ['Snake', 'Cat', 'Dog', 'Elephant', 'Mouse'];
  const user = getRandomNameUser(arrUserName);

  return (
      <CTX.Provider value={{allChats, sendChatAction, user}}>
        {children}
      </CTX.Provider>
  )
};

export default Store;
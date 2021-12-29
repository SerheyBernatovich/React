import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox.jsx';

ReactDOM.render(
  <Mailbox unreadMessages={['4']} />,
  document.getElementById('root')
);

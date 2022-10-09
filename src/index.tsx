import React from 'react';
import ReactDOM from 'react-dom/client';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';
// import ClassUserSearch from './classes/UserSearch';
import UserSearch from './refs/UserSearch';
 
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

root.render(
  <React.StrictMode>
    <UserSearch />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';
import ClassUserSearch from './classes/UserSearch';
 
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

root.render(
  <React.StrictMode>
    <ClassUserSearch users={[{name: 'Sarah', age: 20}, {name: 'Test', age: 20}]}/>
  </React.StrictMode>
);


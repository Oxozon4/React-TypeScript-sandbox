import React from 'react';
import ReactDOM from 'react-dom/client';
// import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

root.render(
  <React.StrictMode>
    <UserSearch />
  </React.StrictMode>
);


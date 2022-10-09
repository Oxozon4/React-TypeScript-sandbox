import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './props/Parent';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App baslik={1} reklamAcik={true} />
    <App baslik={1} reklamAcik={false} />
  </>
);

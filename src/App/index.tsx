import { useEffect } from 'react';
import RouterElement from 'App/Router';

import s from './App.module.css';

export default function App() {
  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
  },[])

  return (
    <div className={s.app}>
      <RouterElement />
    </div>
  );
};

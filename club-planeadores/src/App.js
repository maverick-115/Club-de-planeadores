import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselFade from "./components/CarouselC";
import Actividades from "./components/ActividadesC";
import Wheater from "./components/WheaterC";
import Footer from "./components/FooterC";
import Historia from "./components/HistoriaC";
import Loading from "./components/Loading";
import i18n from './i18n';
import React, { Suspense, useState } from 'react';
import LocaleContext from './LocaleContext';



function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <div className="App">
      <LocaleContext.Provider value={{locale, setLocale}}>
        <Suspense fallback={<Loading></Loading>}>
          <NavBar></NavBar>
          <CarouselFade></CarouselFade>
          <Actividades></Actividades>
          <Historia></Historia>
          <Wheater id="wheater"></Wheater>
          <Footer></Footer>
        </Suspense>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;

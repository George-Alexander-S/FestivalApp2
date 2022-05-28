import {useState, useEffect, useRef} from "react";
import React from "react";
import {GiGuitarBassHead} from "react-icons/gi";


import ReactWeather, { useOpenWeather } from 'react-open-weather';

import './fonts/metal lord.ttf';
import BurgerMenu from "./Components/BurgerMenu";
import Restroom from "./Components/Restroom";
import AnnouncementMain from "./Components/AnnouncementMain";
import Food from "./Components/Food";
import FullMap from "./Components/FullMap";
import Timeline from "./Components/Timeline.js";

function App() {



    /*TEST*/
        /*const [openDemo, setOpenDemo] = useState(false);
        const demoRef = useRef();*/
    /*TEST*/

    /*START Burgermenu*/
    React.useEffect(() => {
        const menuWrap = document.querySelector(".bm-menu-wrap");
        if (menuWrap) {
            menuWrap.setAttribute("aria-hidden", true);
        }
    }, []);
    /*END Burgermenu*/

    /*START Band Timeline*/
    const [openChart, setOpenChart] = useState(false);
    const chartRef = useRef();
    useOnClickOutsideChart(chartRef, () => setOpenChart(false));

    /*START "Close Band Timeline when clicking outside div"*/
    function useOnClickOutsideChart(chartRef, handler) {
        useEffect( () => {
                const listener = (event) => {
                    if (!chartRef.current || chartRef.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);

                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },
            [chartRef, handler]);
    }
    /*END "Close Band Timeline when clicking outside div"*/

    /*START Announcement Modal popup*/
    //State is a boolean, initial false. Modalen heter openModal. setOpenModal er funksjonen som muterer/endrer Modalen
    /*const [openModal, setOpenModal] = useState(false);*/

    /*const ref = useRef(); /!*Må huske å lære mer fra Usehooks.com*!/
    useOnClickOutside(ref, () => handleShow(false));*/
    /*END Announcement Modal popup*/

    /*START "Close ANNOUNCEMENTS when clicking outside div"*/
    /*function useOnClickOutside(ref, handler) {
        useEffect( () => {
                const listener = (event) => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);

                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },
            [ref, handler]);
    }*/
    /*END "Close when clicking outside div"*/

    /*START weather widget data*/
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '7c0eff8c2c822d3e88a5a5cea94e021c',
        lat: '59.8961',
        lon: '10.7747',
        lang: 'en',
        unit: 'metric',
    });
    /*END weather widget data*/


  return ( /*START HEADER*/

      <div className="App container mx-auto mt-3 max-w-xs">
          <BurgerMenu />
          <div>
              <header>
                  <h2 style={{margin: 0}}/>
              </header>
          </div>
          <div className="flex justify-left">
              <GiGuitarBassHead className="text-5xl mb-3 text-center"/><AnnouncementMain/></div>


          {/*END HEADER*/}

          {/*START: WHO's NEXT:*/}
          <div ref={chartRef}>
              <button className="bg-gray-200 w-full rounded-md border-r-8 border-t-4 border-l-4 border-b-4 border-l-amber-500 border-t-amber-500 border-r-amber-700 border-b-amber-700" onClick={() => {
                  if (openChart === false) {
                      setOpenChart(true)
                  }
                  else if (openChart === true) {
                      setOpenChart(false)
                  }
              }}>
                  <h2 className="text-lg text-left mt-3 ml-3 mb-3 font-bold">Who's next: </h2>
                  <p className="text-3xl" id={"whos-next"}>IRON MAIDEN</p>
                  <h2 className="text-lg text-left ml-3 mb-5 mt-5 font-bold">Time: 21:00</h2>
                  <h2 className="text-lg text-left ml-3 mb-5 font-bold">Main Stage</h2>
                  <h2 className="ml-3 mb-5 font-bold underline underline-offset-2">Click to open/close full schedule!</h2>
              </button>
              {openChart && <Timeline closeChart={setOpenChart}/>}
          </div>
          {/*END: WHO's NEXT:*/}

          {/*START BUTTONS*/}
          <div className="flex justify-evenly mb-10 mt-4">
          <Restroom/>
          <Food/>
          <FullMap/>
          </div>
          {/*END BUTTONS*/}

          {/*START FORECAST*/}
          <div className="mt-5 flex justify-center">
              <h1 className="mb-6 text-3xl">
                  Todays Forecast
              </h1>
          </div>
          <div>
              <ReactWeather
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  data={data}
                  lang="en"
                  locationLabel="Ekebergsletta"
                  unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                  showForecast
              />
          </div>
          {/*END FORECAST*/}

          <div>

          </div>
      </div>
  );
}

export default App;

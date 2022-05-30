import {useState, useEffect, useRef} from "react";
import React from "react";
import {GiGuitarBassHead} from "react-icons/gi";
import {AiFillSchedule} from "react-icons/ai";
import ReactWeather, {useOpenWeather} from 'react-open-weather';
import './fonts/metal lord.ttf';
import BurgerMenu from "./Components/BurgerMenu";
import Restroom from "./Components/Restroom";
import AnnouncementMain from "./Components/AnnouncementMain";
import Food from "./Components/Food";
import FullMap from "./Components/FullMap";
import Timeline from "./Components/Timeline.js";
import './App.css';
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

      <div id="background" className="App container mx-auto mt-3 max-w-xs ">
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
          <div id="next" >
              <div id="nextText">
              <h2 className="text-left ml-10 mb-1 mt-1 font-bold">Coming up on: </h2>
              <h2 id="mainApp" className="text-lg text-left ml-10 mb-2 font-bold">Main Stage</h2>
              <p className="text-3xl ml-12" id="whos-next">IRON MAIDEN</p>
              <h2 className="text-sm text-center font-bold">Time: 21:00</h2>
              </div>
          </div>
              <div className="mt-3 relative" ref={chartRef}><p className="text-center font-bold">Band List</p>
                  <button id="fullList" className="bg-red-50 hover:bg-red-100 text-5xl py-2.5 pr-4 pl-4 rounded-3xl border-2 border-gray-400" onClick={() => {
                      if (openChart === false) {
                          setOpenChart(true)
                      }
                      else if (openChart === true) {
                          setOpenChart(false)
                      }
                  }}><AiFillSchedule/>
                  </button>
                  {openChart && <Timeline/>}
              </div>
          {/*END: WHO's NEXT:*/}

          {/*START BUTTONS*/}
          <div className="flex justify-evenly mb-5 mt-4">
          <Restroom/>
          <Food/>
          <FullMap/>
          </div>
          {/*END BUTTONS*/}

          {/*START FORECAST*/}
          <div className="flex justify-center">
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

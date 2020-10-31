import 'bootswatch/journal/bootstrap.css';
import * as React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import './App.css';

import { Col, Grid, Nav, Navbar, NavItem, Row } from 'react-bootstrap';

const PLACES = [
  { name: 'Palo Alto', zip: '94303' },
  { name: 'San Jose', zip: '94088' },
  { name: 'Santa Cruz', zip: '95062' },
  { name: 'Honolulu', zip: '96803' },
];

function WeatherDisplay({ props }) {
  const [weatherData, setWeatherData] = React.useState({
    weather: { main: '' },
    main: {
      temp: '',
      temp_max: '',
      temp_min: '',
    },
    name: '',
    wind: {
      speed: '',
    },
  });

  React.useEffect(() => {
    const zip = props;
    const URL =
      'http://api.openweathermap.org/data/2.5/weather?q=' +
      zip +
      '&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial';
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setWeatherData(json);
      });
    return () => {
      setWeatherData({
        weather: { main: '' },
        main: {
          temp: '',
          temp_max: '',
          temp_min: '',
        },
        name: '',
        wind: {
          speed: '',
        },
      });
    };
  });
  const weather = weatherData?.weather[0];
  const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '.png';
  return (
    <>
      {weatherData.name === '' ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>
            {weather.main} in {weatherData.name}
            <img src={iconUrl} />
          </h1>
          <p>Current: {weatherData.main.temp}°</p>
          <p>High: {weatherData.main.temp_max}°</p>
          <p>Low: {weatherData.main.temp_min}°</p>
          <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [activePlace, setActivePlace] = React.useState(0);
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>React Simple Weather App</Navbar.Brand>
          <a href="https://github.com/ericvicenti/intro-to-react">
            Learn to build me
          </a>
        </Navbar.Header>
      </Navbar>
      <Grid>
        <Row>
          <Col md={4} sm={4}>
            <h3>Select a city</h3>
            <Nav
              bsStyle="pills"
              stacked
              activeKey={activePlace}
              onSelect={(index) => {
                setActivePlace(index);
              }}
            >
              {PLACES.map((place, index) => (
                <NavItem key={index} eventKey={index}>
                  {place.name}
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col md={8} sm={8}>
            <WeatherDisplay key={activePlace} props={PLACES[activePlace].zip} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

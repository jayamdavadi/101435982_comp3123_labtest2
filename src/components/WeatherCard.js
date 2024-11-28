import React from "react";
import { Card, Button } from "react-bootstrap";
import "./../styles/WeatherCard.css";

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <div className="weather-card">No data available</div>;
  }

  return (
    <Card className="weather-card">
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text>
          Temperature: {weather.main.temp} °C
        </Card.Text>
        <Card.Text>
          Condition: {weather.weather[0].description}
        </Card.Text>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
        <Card.Text>
          Humidity: {weather.main.humidity}%
        </Card.Text>
        <Card.Text>
          Wind Speed: {weather.wind.speed} m/s
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;

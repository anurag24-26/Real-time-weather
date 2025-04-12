import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    temperature,
    description,
    icon,
    humidity,
    windSpeed,
    city,
    country,
  } = weatherData;

  return (
    <div className="weather-card">
      <h2>
        {city}, {country}
      </h2>
      {icon && (
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
      )}
      <p>{description}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;

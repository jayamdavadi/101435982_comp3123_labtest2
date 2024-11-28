import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return null;
  }
};

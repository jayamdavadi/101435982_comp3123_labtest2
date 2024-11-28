
# Weather App - COMP3123 Lab Test 2

This is a simple weather application built using ReactJS that fetches real-time weather data from the OpenWeatherMap API. The app allows users to view the current weather conditions for any city, displaying essential information like temperature, weather conditions, and an icon representing the current weather.

## Project Setup

### 1. Clone the repository
Clone the repository to your local machine using the following command:
git clone https://github.com/jayamdavadi/101435982_comp3123_labtest2.git


### 2. Install Dependencies
Navigate to the project folder and run the following command to install dependencies:
npm install


### 3. Set Up API Key
1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/).
2. Obtain your API key.
3. Create a `.env` file and add the following:

REACT_APP_API_KEY=...

### 4. Run the Project
To start the development server and run the app, use:
npm start


## Features

- **Real-time Weather Data**: Fetches and displays the current weather for any city using the OpenWeatherMap API.
- **Temperature in Celsius**: Displays the temperature in Celsius by using the `metric` unit.
- **Weather Conditions**: Shows the weather condition (e.g., "Clear sky", "Broken clouds").
- **Search by City**: Allows users to search for a city and view its weather details.

## Dependencies

- **ReactJS**: Front-end library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **OpenWeatherMap API**: Used to fetch weather data.

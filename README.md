# Weather App - React

This is a weather forecast application built using **React**. It fetches real-time weather data from the **OpenWeather API** and displays key weather information such as temperature, wind speed, and humidity for a given city.

## Features

- Fetches real-time weather data using the **OpenWeather API**.
- Displays weather icons dynamically based on the current weather conditions (e.g., clear, rain, clouds).
- Responsive design with search functionality for cities.
- Displays temperature, wind speed, humidity, and weather condition.
- Designed with a clean, modern UI using React components and CSS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v12 or higher)
- **npm** (v6 or higher) comes bundled with Node.js

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd weather-app
   ```

3. **Install dependencies**:

   Once you're in the project folder, run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server**:

   To start the React development server, run:

   ```bash
   npm start
   ```

2. **Access the app in your browser**:

   Once the server starts, open your browser and navigate to:

   ```
   http://localhost:3000
   ```

   The weather app should now be running in your browser.

### Environment Setup

1. **API Key for OpenWeather**:
   
   You will need an **API key** from the OpenWeather API to fetch weather data.

   - Visit [OpenWeather](https://home.openweathermap.org/users/sign_up) and sign up to get your API key.
   - Once you have your API key, replace the `apiKey` variable in the `App.js` file with your own API key.

   ```javascript
   const apiKey = "YOUR_OPENWEATHER_API_KEY";  // Replace with your actual API key
   ```

### Folder Structure

```
/public
  /images
    - clear.png
    - clouds.png
    - rain.png
    - drizzle.png
    - mist.png
    - wind.png
    - humidity.png
    - background.jpg
  index.html

/src
  /components
    - Search.js
    - Weather.js
  App.js
  App.css
  index.js
  README.md

package.json
```

### Weather Images

- Weather icons (e.g., `clear.png`, `clouds.png`, `rain.png`) are located in the `public/images/` folder.
- The app will dynamically load the weather icon based on the weather condition (e.g., "Clear", "Rain", "Clouds").
- Ensure that your images are named properly and placed in the correct folder as specified in the folder structure.

### Customization

1. **Background Image**:
   
   To change the background image, replace the `background.jpg` file located in `public/images/` with any background of your choice. The file path is defined in the `App.css` file.

2. **Styling**:
   
   The app uses a custom stylesheet located in `src/App.css`. You can modify this file to change the look and feel of the app.

### Deployment

To deploy the app for production, run:

```bash
npm run build
```

This will generate a `build` folder with the production-ready code.

You can then deploy the `build` folder to any static site hosting service, such as:
- **Netlify**
- **Vercel**
- **GitHub Pages**

### Built With

- **React** - A JavaScript library for building user interfaces.
- **OpenWeather API** - Provides weather data for cities around the world.
- **CSS** - Used for styling the app.


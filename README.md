# 🌍 Travel Advisor

A modern travel recommendation application built with React 19 that helps you discover tourist attractions, restaurants, hotels and attractions around the world.

## ✨ Features

- 🗺️ **Interactive Map** - Visualize tourist attractions on Google Maps
- 🔍 **Advanced Search** - Search for specific destinations and places
- ⭐ **Ratings and Reviews** - See opinions from other travelers
- 📱 **Responsive Design** - Works perfectly on mobile and desktop devices
- 🎨 **Modern Interface** - Built with Material-UI (MUI v5)
- 🏨 **Multiple Categories** - Restaurants, hotels, tourist attractions and more

## 🛠️ Technologies Used

### Frontend
- **React 19.2.4** - Main framework
- **MUI (Material-UI) v5** - Components and styles
- **Emotion** - CSS-in-JS styling engine
- **Google Map React** - Map integration
- **Axios** - HTTP client for API calls

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **Create React App** - Project base structure

## 📋 Prerequisites

- **Node.js** v14+ 
- **npm** v6+
- **Google Maps API Key** (for map functionality)
- **RapidAPI Key** (for travel data)

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/SaraBastidas19/project_travel_advisor.git
cd travel-underscore-advisor
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
Create a `.env` file in the project root:
```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_key
REACT_APP_TRAVEL_API_KEY=your_rapidapi_key
```

4. **Start the development server:**
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
travel-underscore-advisor/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── styles.js
│   │   ├── List/
│   │   │   ├── List.jsx
│   │   │   └── styles.js
│   │   ├── Map/
│   │   │   ├── Map.jsx
│   │   │   └── styles.js
│   │   └── PlaceDetails/
│   │       ├── PlaceDetails.jsx
│   │       └── styles.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🔧 Main Components

### Header
- Destination search bar
- Main navigation
- Responsive user interface

### Map
- Interactive Google Maps visualization
- Tourist attraction markers
- Place information popups

### List
- Recommended destinations list
- Filtering and sorting options
- Detailed view of each place

### PlaceDetails
- Complete place information
- Image gallery
- Ratings and reviews
- Contact information

## 📚 Available Scripts

### `npm start`
Starts the development server.

### `npm test`
Runs unit tests.

### `npm run build`
Builds the app for production.

### `npm run eject`
Exposes the Create React App configuration (Not reversible).

## 🔌 API Integrations

### Google Maps API
- Map rendering
- Geolocation
- Location information

### Travel API (RapidAPI)
- Restaurant data
- Hotel information
- Tourist attractions
- Ratings and reviews

## 🎯 Upcoming Features

- [ ] User authentication
- [ ] Save favorite places
- [ ] Create travel itineraries
- [ ] Share recommendations
- [ ] Personal rating system
- [ ] Social media integration

## 🐛 Report Issues

If you find any issues, please open an [issue](https://github.com/SaraBastidas19/project_travel_advisor/issues) with a detailed description.

## 🤝 Contributions

Contributions are welcome. To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sara Bastidas** - [@SaraBastidas19](https://github.com/SaraBastidas19)

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) - UI components
- [Google Maps API](https://developers.google.com/maps) - Interactive maps
- [Create React App](https://create-react-app.dev/) - Initial setup
- React community

---

**Made with ❤️ by Sara Bastidas**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

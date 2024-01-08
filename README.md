# Weather App

This weather app was created as part of the code challenge.

## Features

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🦾 TypeScript
- 🫀 [Vitest](https://vitest.dev/) - unitary testing made easy
- 🎨 [Tailwind with JIT](https://tailwindcss.com/)
- React-Toolkit
- MSW for mockin

### Running the project locally

```bash
yarn install # If you don't have yarn installed, run: npm install -g yarn
yarn dev
```

Open the browser on http://localhost:3000/

#### Running the app with mocks

Open the .env file and uncomment

```bash
VITE_MODE=mock
```

### What to expect

The application is a weather dashboard that allows users to search for the current weather of a city. The dashboard should display the current temperature, weather condition, and a brief forecast for the next few hours.

### Running tests

```bash
yarn test
```

### Build

To build the App, run

```bash
yarn build
```

And, enjoy :)

## Usage

### Development

Just run and visit http://127.0.0.1:3000/

```bash
yarn dev
```

### Possible Improvements

- The application should use another endpoint to search from a list of cities, and give the user a searchable dropdown instead
- A loading skeleton could have been used to show the loading state
- Error div could be better styled
- Added some VRT testing from cypess

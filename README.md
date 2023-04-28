# Data Grid

This is a monorepo project that uses Lerna and Stencil to build a data grid web component that can be easily integrated into a React application.

## Packages

The project consists of three packages:

1. `data-grid`: The Stencil web component that implements the data grid functionality.
2. `data-grid-react`: The React wrapper component that makes it easy to use the data grid in a React application.
3. `data-grid-storybook`: The React app built with Vite that contains the Storybook of the project.

## Installation

Clone the repository

```sh
git clone git@github.com:avenirjs/data-grid.git
```

Install the dependencies

```sh
npm install
```

Bootstrap the packages

```sh
npx lerna build
```

## Documentation (Storybook)

go to the storybook folder

```sh
cd packages/storybook
```

Build the storybook

```sh
npm run build-storybook
```

## Tests

To run E2E and Unit tests, run the following from the root folder

```sh
npx lerna run test
```

## Development

Launch the stencilJS package in watch mode

```sh
cd packages/data-grid
npm run build.watch
```

Launch the ReactJS package in watch mode

```sh
cd packages/data-grid-react
npm run build.watch
```

Launch the storybook

```sh
cd packages/storybook
npm run storybook
```

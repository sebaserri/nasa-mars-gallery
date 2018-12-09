# Nasa Mars Gallery

Built in React.js  

The data was fetching using <code>fetch</code>.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install dependencies.

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Design

The project has a main component called <code>App</code>. App imports <code>PhotoGrid</code> component to display a grid. <code>PhotoGrid</code> iterates photo's object. Each object has the following attributes: <code>link</code>, <code>description</code> and <code>creationDate</code>. Then, <code>Photo</code> component displays the attributes inside a <code>Card</code>. 

## Enhancements

Trigger an event on <code>Expand</code> button. Set key/value to the <code>state</code> with the value <code>collapse</code>. Then, modify the scss file to expand the <code>Card</code>. 


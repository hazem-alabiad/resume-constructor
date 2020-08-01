
[![Netlify Status](https://api.netlify.com/api/v1/badges/d8a08e3a-bb93-4368-9739-9f1a61520701/deploy-status)](https://app.netlify.com/sites/oplogcv/deploys)

  
# Resume Constructor

This is a CV builder app by Hazem. W

# How to install
*  You need to have `git` & `yarn` installed in your machine.
1. Dowload the project from Github.
2. Go to the main folder and hit `yarn install` to install the dependencies.

# Used packages
* `reach-router` for routing.
* `axio` for API requests.
* `react-semantic-ui` & `bootstrap` for UI.
* `i18next` for managing the app languages.
* `prop-types` for type checking.
* `react-toastify` for notification.
* `redux` for state management.
* `redux-logger` & `redux-thunk` as redux enhancers.
* `redux-form` for managing the forms. 

# Project Structure
- `src/actions/` for redux action methods.
- `src/api/` for everything related to API calls, URLs.
-  `src/components/` for all general components 'both class & functional'.
- `src/constants/` for all constants e.g. route names, actionTypes, global strings 'tokenName' ...etc.
- `src/form/` for general and reusable forms, form validators, formNames,  andform rendering files.
- `src/helpers/` for helper functions e.g. localStorage related methods, strings, numbers, ...etc.
- `src/reducers/` for reducers.

## In18 Integration
- So far, two langaues are supported `tr` & `en`. All languages related files must reside under `public/locales/`, each language should have a seperate folder.
- There is a naming convention for the folders e.g. `tr` `ru` `fr` ... etc.
- Under each language folder there is a file named `translation.json` that contain the (key, value) pair used in translation.
- I used [I18N Manager](https://www.electronjs.org/apps/i18n-manager) to easily manage the inter-languages translations.
- You can use `WithTrans` component to translate what you want by passing `keyword` prop as string, `vars` as object for variabes in the translation text.
- The code is able to detect your language configuration and set the proper one intially.
- For more info visit [I18Next](https://www.i18next.com/) 

## Followed React Patterns
- In the implementation I followed:
	1. `Container Viewer Pattern` to split manipulating the state from the view layer for easier debugging and more resusable components.
	2. `Decorated Components` to wrap the components with `reduc-form`.

## Design System
- It's a general file used for global styling, colors, font sizes, ...etc.

## Styling with `CSS`
- For this purpose, you can add your own `CSS` code in `index.css` or `app.css`.

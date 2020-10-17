## Overview
---
For this project, we had to use the popular JavaScript library React to create an image gallery app. The image gallery will display content that is fetched from the Flickr API using the Fetch API/Axios. Below is a number of things covered in the project:
- Used JavaScript and JSX to build out gallery components in a modular fashion
- Used React Router to set up routes for some default topics and a search page
- Used the Flickr API to fetch images that could be used within the app
- Added logic to handle search requirements

---
## To run this app
Download the project files, open the project in a code editor. For example VSCode, type the command into the termal `npm install`, which will download all the project dependencies. 

Next you will need to create a `config` folder inside `/src`, from there create a file called `config.js`. Once you have complete that, past in the following code: 

`const apiKey = 'YOUR API KEY HERE';`

`export default apiKey;`

Now go to Flickr to [create your API key](https://www.flickr.com/services/apps/create/apply/), make sure you apply for a non-commercial key. Once you've gotten your key, past it into the `const apiKey` within the `config.js` file and hit save. 

Now type `npm start` to run the app in the browser.

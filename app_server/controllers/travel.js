//require file system on the web server, not the user's computer, where the webcode is running. 
const fs = require('fs');
//read the file passed in using function readFileSync. 
//The function will read in the file and return a string.
//the string returned by the read function is passed into the JSON.parse function that will
//return an JSON object using said string.
//However, this is not best practice as parsing data everytime the webpage is requested is
//expensive.
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
};



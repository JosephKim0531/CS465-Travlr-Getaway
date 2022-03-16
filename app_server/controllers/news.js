//require file system on the web server, not the user's computer, where the webcode is running. 
const fs = require('fs');
//read the file passed in using function readFileSync. 
//The function will read in the file and return a string.
//the string returned by the read function is passed into the JSON.parse function that will
//return an JSON object using said string.
//However, this is not best practice as parsing data everytime the webpage is requested is
//expensive.
const latestNews = JSON.parse(fs.readFileSync('./data/latestNews.json', 'utf-8'));
const vacTips = JSON.parse(fs.readFileSync('./data/vacationTips.json', 'utf-8'));


const news = (req, res) => {
    //pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: "Travlr Getaways - News", latestNews, vacTips});
}

module.exports = {
    news
}
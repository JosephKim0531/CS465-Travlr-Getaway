const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: pageTitle});
}

module.exports = {
    news
}



/*
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways - News'});
};

module.exports = {
    news
};
*/
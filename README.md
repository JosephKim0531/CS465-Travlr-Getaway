# CS465-FullStack
CS-465 Full Stack Development with MEAN

The Travlr Getaway's website is a RESTful web application that was built to display vacations to users. In addition, a single-page application was built for the administration side to update and maintain the webpage.

Architecture:
In order to accomplish the project, the MEAN (MongoDB, Express, AngularJS, and Node) stack was employed. MongoDB is a NoSQL database that has gained popularity due to its speed and flexibility compared to SQL databases. MongoDB utilizes the concept of collections and documents instead of tables to organize and retain data. It also uses BSON and JSON to store data, which makes it a good candidate for the MEAN stack. Express is a framework that abstracts the complexities of creating a Node application away. Express was used in conjunction with Handlebars, a templating framework, to create dynamically rendered HTML pages. AngularJS is a frontend framework that allows for the creation of SPAs. In a SPA, the user is sent the majority of files required to run the webpage at first request. The webpage can then update an subsequent request with minimal data transfer. Node was used to create the web server for the application. 

Functionality:
JavaScript Object Notation (JSON) is a standard file format used to transfer and receive data. The format follows the syntax used for JavaScript objects. However, the platform does not need to be written in JavaScript in order to utilize JSON. Throughout the process of building the app, the code was refactored many times in order to improve functionalities and efficiencies. For example, the first refactoring of the code involved employing Handlebars to dynamically render the HTML pages. In addition, Angular was employed to create a SPA with authentication services. Reusable user interface components are beneficial as they improve the efficiency of development. For example, a trip-card component was creating in Angular to dynamically apply a card format for the trips. This increased the speed of development as each trip did not have to be implemented in a card format. 

Testing:
In order to provide the necessary functionality for the webpage, an API was developed to perform CRUD operations with the MongoDB database. CRUD methods were implemented on both the administrator database as well as the trips database. The endpoints were used to route the app to the appropriate controller and model. The controller and model then used Mongoose to perform the specified action and return the appropriate information back to the view. In order to test these endpoints, Postman was used to ensure that they behaved correctly. 

Reflection:
This course has given me a glance into the intricacies of full stack development. I have learned how to utilize the MEAN stack in order to development a web application. I believe that this course is a good first step into finding a career in full stack development. 


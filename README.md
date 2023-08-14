# New-post-app

https://new-post-app.netlify.app/

The objective of this project is to create an app for getting actual status of the location of the parcel by the invoice number and receiving a list of Nova Poshta branches.

The project includes routing functionality. There are two main routes: the home page ("/") and the offices page ("/offices ").
The user enters the consignment note number (TTN) or his/her own invoice number in the input field on the Home page. The application sends a request to receive data on the current status of the place of delivery. Information about the shipment is displayed to the user.

The user has the opportunity to see all previous TTN numbers in the form of a list in the sitebar. Even after reloading the page. By clicking on the TTN number already added to the list of entries, a request for the status of finding the product (delivery) is automatically performed and the relevant information is displayed. The TTN number is automatically displayed in the input field. 
It is possible to clear all old TTN.

The TTN number is checked when entering for correctness of filling with a regular expression. If the format is incorrect, after clicking the button to get the delivery status of the TTN, a prompt is displayed and the request is not sent.

The user can see the list of New Post offices on the second tab - Offices. There is a search field by city name.

The layout is adaptive. You can use the application on a mobile device, tablet or desktop

The project is built using HTML, CSS, JavaScript, React, redux, react-redux, reduxjs/toolkit, modern-normalize, react-toastify, axios, prop-types, react-router-dom, classnames, figma, gitHub, and vite.js.

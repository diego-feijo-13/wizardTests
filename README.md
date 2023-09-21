# wizardTests
Testing client data storage for step-by-step wizards application

Thanks, Madelyn for providing a prototype for this application.

# Getting started
You just need to clone and run the application. 
The main page will have two buttons, one for each wizard.
Both wizards use the same ViewModel, but they differ in how the data is stored on the client side.

## Local Storage Wizard

Will use the JavaScript [window.localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) property to persist data between steps. 

## Hidden Input Wizard

Has an outer view with a hidden input to store the wizard data. The steps are loaded in a container, inside the main view. 

# What's next
This is just a test to show different ways to store data on the client side, which can be improved in a lot of ways.

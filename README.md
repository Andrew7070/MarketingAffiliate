# MarketingAffiliate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Architecture Planning

Overview
Support viewing and editing user details
Support viewing orders
Secure user details

Key requirements
Display user courses in tables
Display user library course details in cards
Display user courses with paging
Enable CRUD for user order list
Support login/logout optionally with email, password or 3rd party authentication etc...
Provide for functionality even on bad networks

App Features
Ensure adequate validation for all form inputs

Courses feature
  Display full course list
  Display user's courses
  Support filtering, paging and sorting

Course feature
  CRUD User's courses. NB. On delete, archive course
  Display course details

Orders feature
  Display courses in cart
  Support paging
  Support online payment

Login/Logout feature
  Secure. Option of Session, Token


Domain Security
OAuth2

Domain Rules
Validate login credentials
User to be logged in to access own courses
All forms to be validated on input field capture/submission?
Ensure accurate totals
Ensure accuracy in use of currency
What option for taxes?


Logging
Custom logging library or public package?
Options: 
Logging to different areas based on dev/stage/prod



Services/Communication
Backend if a RESTful service from Udemy
Angular Services:
  Data Services: HttpClient
    Users and their orders
    Angular material tables to provide additional functionality of sorting and filtering
  Logging Services: 
  Mediator/EventBus based on requirement
  Replay to cache some streams
  HTTPInterceptor for setting token for HTTP requests (CRUD+PATCH)



Data Models
User
Course
Courses

Feature Components
login
logout
signup

Shared Functionality
Data Services
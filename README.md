![2022-08-25 11_12_29-JsonToTable](https://user-images.githubusercontent.com/71946846/186625441-fb1ab659-21bc-4312-8f8c-58b0de818ee2.png)![CompletedJsonToTable](https://user-images.githubusercontent.com/71946846/186625970-7896e8a5-4e56-424f-9471-f0b606b58e0c.png)

# JsonToTable - description
This is a project using Angular 12 so I uninstalled the current version of the CLI and, using nvm, I reverted to a Node version tailored to Angular12. 
Task: I placed the json data in the assets folder in a data.json file; then I created a  models and service to handle the simulation of fetching data from the API. In the component I used the response and put the records in a table in the template (prtSc is in readme.md).
Note: The data structure in json is quite complex and consists of nested, non-uniform objects.
In the second step, I created search input field to search for work orders by description and clear button to reset input field value if needed. For the search functionality, I have implemented a custom Pipe.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

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

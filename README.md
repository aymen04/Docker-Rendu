# Golden Rules

Golden Rules is a simple React application that allows users to manage a list of rules.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you start, you need to have Docker and Docker Compose installed on your machine.

If you don't have Docker and Docker Compose installed , follow the instructions on this link 'https://docs.docker.com/'

### Installation and Running

1. Unzip the project folder


2. Navigate to the project folder

#commande --> cd GoldenRules


3. Build and run the Docker containers


#commande --> docker-compose up --build


4. Once the containers are running, the application will be available at `http://localhost`.

### Populating the Database

The database is populated with initial data from `src/data/data.json`. If you want to add more rules, you can edit this file and then restart the Docker containers.

## Code Explanation

The application is structured as follows:

- `src` folder contains the main code of the application.
- `index.js` is the entry point of the application. It renders the `App` component inside the `root` HTML element.
- `App.jsx` is the main component that defines the structure and routes of the application.
- `ThemeContext.js` provides a context for managing the theme of the application.
- `styles.css` contains the styles for the application.

The application uses React Router for navigation, and the routes are defined in `App.jsx`. There are three main routes:

- `/` displays the list of rules.
- `/new` displays the form to add a new rule.
- `/edit/:id` displays the form to edit an existing rule.

The rules are stored in the `rules` state, which is initialized with data from `data.json`. The `RuleList` component displays the list of rules, and the `RuleForm` component is used to add or edit rules.


## Important Links

     - application : http://localhost
     - nginx : http://localhost:8080
     - backend : http://localhost:3000  


# Error on localhost:3000

      Only the container serving as the HTTP server (nginx in your case) should be open to the outside. The other containers, including the backend container, should be accessible only within the Docker Compose network.


With this configuration, the nginx container will be accessible from the outside on port 80, while the backend and db containers will be accessible only within the backlink network.

- You can check in the Docker , the backend's log if it's turning good you will have a " Connected to DataBase " message

- You can also check for the different ports




## Current Status of the Project

As of now, the project is in a state where the frontend and backend are set up, and the backend is successfully connected to the database. However, I have encountered a roadblock in terms of sending requests from the frontend to the backend. Despite multiple attempts and extensive debugging, I have not been able to find a solution to this issue. Therefore, the project is currently on hold at the stage of sending requests. Any help or suggestions on how to resolve this would be greatly appreciated.







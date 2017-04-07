# ClubManagement

By: Philip Putnam, 04/07/2017



## Planning

1. Configuration/dependencies
  * Node.js, Node Packet Manager (NPM)
  * Bower
  * Angular-CLI
  * Bootstrap
  * Firebase

2. Specs
  * Spec 1: navigate to main page, displays news, site navigation
  * Spec 2: click on 'about' link, routes to about-page with information about the site
  * Spec 3: click on 'home' link, routes back to main page
  * Spec 4: click on 'club' page, routes to page with listed club members
  * Spec 5: click on individual club member name/info, routed to dynamic user profile page
  * Spec 6: at member profile page, display specific member information
  * Spec 7: at member profile page, edit button displays form with ability to edit info
  * Spec 8: at member profile page, delete button deletes member & profile info
  * Spec 9: at club page, button displays form to add new club member
  * Spec 10: at club page, ability to filter team members by member attribute/statistic

3. Integration
  * app.component.ts & app.component.html displaying navbar through different routes
  * main.component.ts & main.component.ts displaying data on main '/' root route
  * app.routing.ts controls routing to different pages
  * club.service.ts injecting data from database to components as necessary
  * add-member component providing form HTML & transfer information to Firebase to add a club/team member
  * update-member component providing form HTML & transfer information to Firebase to update a club/team member

4. UX/UI
  * Display show all foods currently in database
  * Create food form
  * Update food form

5. Polish
  * Fresh styles with bootstrap and custom
  * Add different routes
  * Attempt dynamic routing from Firebase
  * Add dates to foods
  * Add foods to meals

## Setup
* In terminal, navigate to desired directory for project and clone project by typing: git clone https://github.com/philip-putnam/club-manager
* In terminal, navigate into project directory by typing: cd meal-tracker
* In terminal, after navigating into project directory, type: npm install
* In terminal, after navigating into project directory, type: bower install
* In terminal, navigate to project directory and type: atom . (or open project in your preferred program)
* Create a file named 'api-keys.ts' within src/app (i.e., src/app/api-keys.ts)

* **Requires Firebase API key**, in web browser, navigate to https://firebase.google.com/ , sign-up for a free account or login
* Click 'go to console' near the top right of the screen
* Click 'Add project'
* Type in a name for the project, (i.e., 'meal-tracker')
* Click 'database' on the left of screen, then the three vertical dots on the right of the screen above the word 'dismiss', import the mock-foods.json if desired for seed data OR your own json file
* Click 'RULES' change default ".read" and ".write" both, to "true" or true
* Click 'Overview' at top left of screen, then click 'Add Firebase to your web app'
* Copy 'var config' info, i.e:
            var config = {
              apiKey: "xxxx",
              authDomain: "xxxx.firebaseapp.com",
              databaseURL: "https://xxxx.firebaseio.com",
              storageBucket: "xxxx.appspot.com",
              messagingSenderId: "xxxx"
            };

    Where "x"s represent your actual API key found here

* Copy this information into the file 'api-keys.ts' however modify it with the following format:
        export var masterFirebaseConfig = {
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
        };
* In terminal, after navigating into project directory, type: ng serve (or ng s)
* In web browser, navigate to localhost:4200
* Enjoy!

## Further help

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

This project is licensed through MIT, &copy; Philip Putnam, 2017

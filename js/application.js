window.Todos = Ember.Application.create(); // This will create a new instance of Ember.Application and make it available as a variable named Todos within your browser's JavaScript environment. An instance of Ember.Application is the starting point for every Ember application. It helps to instantiate, initialize and coordinate the many objects that make up your app.

Todos.ApplicationAdapter = DS.FixtureAdapter.extend(); // this extend method is also called in todo.js and the routes.js files- read up on it

//Fixtures are a way to put sample data into an application before connecting the application to long-term persistence. (clarify long-term persistence)
// Adapters are responsible for communicating with a source of data for your application. Typically this will be a web service API, but in this case we are using an adapter designed to load fixture data:


// in the index.html file what is with the :completed in  <li {{bind-attr class="isCompleted:completed"}}>
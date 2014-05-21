Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
}); // This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
// make sure your understand what is defining the todo template. see line 9 of the html (data-template-name="todos")

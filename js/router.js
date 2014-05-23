Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
}); // This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
// make sure you understand what is defining the todo template. see line 9 of the html (data-template-name="todos")
// do all templates go into the same html file??

// In Ember, every route has an associated model. 


// implement a TodosRoute class with a model function that returns all the existing todos:
Todos.TodosRoute = Ember.Route.extend({ 
  model: function() {
    return this.store.find('todo'); // clarify what (this) refers to
  }
});

//Because we hadn't implemented this class before (TodoRoute), Ember.js provided a Route for us with the default behavior of rendering a matching template named todos using its naming conventions for object creation.
// how does the above associate with the fixtures in the todo.js file?

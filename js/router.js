Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
}); // This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
// make sure you understand what is defining the todo template. see line 9 of the html (data-template-name="todos")
// do all templates go into the same html file??

// In Ember, every route has an associated model. 


// implement a TodosRoute class with a model function that returns all the existing todos:
Todos.TodosRoute = Ember.Route.extend({ 
  model: function() {
    return this.store.find('todo'); // clarify what (this) refers to -- i believe 'todo' in this case represents a particualr instance of the todo model
  }
});

//Because we hadn't implemented this class before (TodoRoute), Ember.js provided a Route for us with the default behavior of rendering a matching template named todos using its naming conventions for object creation.
// how does the above associate with the fixtures in the todo.js file?

// naming conventions model: Todo
// template: data-template-name="todos"
// controller: Todos.TodosController = Ember.ArrayController.extend({ .. });


//In Ember.js, controllers allow you to decorate your models with 
//display logic. In general, your models will have properties that
// are saved to the server, while controllers will have properties 
//that your app does not need to save to the server.

//For example, if you were building a blog, you would have a BlogPost 
//model that you would present in a blog_post template.

// but we have a Todo model (singular) and todos template (plural??)
// (Remember that a controller gets the model it represents from its route handler.)


//This means that templates know about controllers and controllers 
//know about models, but the reverse is not true. A model knows 
//nothing about which (if any) controllers are decorating it, and 
//controller does not know which views are presenting its properties.

// TEMPLATE gets its properties from CONTOLLER -- CONTROLLER decorates a model (creates an instance of?)

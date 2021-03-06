Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
    // additional child raoutes (paths -- routes are corresponding routes are below) will go here later -- added well into the tut
    this.route('active');
    this.route('completed'); 
  });
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

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

//When the application loads at the url '/' Ember.js will 
//enter the todos route and render the todos template as
// before. It will also transition into the todos.index route 
//and fill the {{outlet}} in the todos template with the 
//todos/index template. The model data for this template is 
//the result of the model method of TodosIndexRoute, which 
//indicates that the model for this route is the same model as
// for the TodosRoute.

Todos.TodosActiveRoute = Ember.Route.extend({
  //The model data for this route is the collection of todos whose isCompleted property is false. 
  model: function (){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },

  //Normally transitioning into a new route changes the template rendered 
  //into the parent {{outlet}}, but in this case we'd like to reuse the 
  //existing todos/index template. We can accomplish this by implementing 
  //the renderTemplate method and calling render ourselves with the specific 
  //template and controller options.

  renderTemplate: function(controller) { // find out how this controller part works
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({  
  model: function() {  // how does thes the data from this model function get sent to the render template down below
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },

  renderTemplate: function (controller) { 
      this.render('todos/index', {controller: controller});
  }
});

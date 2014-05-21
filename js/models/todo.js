Todos.Todo = DS.Model.extend({
  title: DS.attr('string'), // What is this DS.attr shit?
  isCompleted: DS.attr('boolean')
});

//This code creates a new class Todo and places it within your application's namespace. Each todo will have two attributes: title and isCompleted.
// a reference to this file exists in index.html

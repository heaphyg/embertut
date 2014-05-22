Todos.Todo = DS.Model.extend({
  title: DS.attr('string'), // What is this DS.attr stuff? == Data store
  isCompleted: DS.attr('boolean')
});

//This code creates a new class Todo and places it within your application's namespace. Each todo will have two attributes: title and isCompleted.
// a reference to this file exists in index.html

// In Ember, every route has an associated model. 

//The store is the central repository of records in your application. You can think of the store as a cache of all of the records available in your app. Both your application's controllers and routes have access to this shared store; when they need to display or modify a record, they will first ask the store for it.
//This instance of DS.Store is created for you automatically and is shared among all of the objects in your application.

// below are the fixtures -- notice that the html file has these attributes pre written in the
Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];
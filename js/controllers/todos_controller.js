//This controller will now respond to user action by using 
//its newTitle property as the title of a new todo whose 
//isCompleted property is false. Then it will clear its newTitle 
//property which will synchronize to the template and reset the 
//textfield. Finally, it persists any unsaved changes on the todo.

// this is what controllers do - they have methods for models and save thos models or changes to those models to the data base
// notice we had to add this dependency to the index.html file (script tags)
Todos.TodosController = Ember.ArrayController.extend ({
  actions: {
    createTodo: function() {
      //get the new todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; } // I assume this returns the trimme version of the string if it isn't trim?? or does this return all the stuff written below?

      // create the new Todo model // understand (this)
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // clear the "New Todo" text field
      this.set('newTitle', '');

      //save the new model
      todo.save();
    }
  },

  remaining: function() { // study how and where this gets called
    console.log(this)
    console.log("hello")
    return this.filterBy('isCompleted', false).get('length');

  }.property('@each.isCompleted'), // what is with this???
 
  inflection: function() {
    var remaining = this.get('remaining');
    return remaining ===  1 ? 'todo' : 'todos';
  }.property('remaining')
});

// how does the enter button trigger the action established above?? -- the enter key must be a built in default
// also does hitting the enter button make an AJAX request


// var str = "       Hello World!        ";
// alert(str.trim());
// Hello World!
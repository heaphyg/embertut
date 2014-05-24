Todos.TodoController = Ember.ObjectController.extend({
  actions: { // so action is actuall a handlebars helper thats why <button {{action "removeTodo"}} class="destroy"></button> works
    editTodo: function() {
      this.set('isEditing', true);
      console.log("isEditing is being set to true")
    },

    acceptChanges: function() {
      this.set('isEditing', false);
      console.log("now its set to false")
      if (Ember.isEmpty(this.get('model.title'))) {  // I also find it intersting that we are checking if Ember isEmpty?
        this.send('removeTodo'); 
      } else {
        this.get('model').save();
      }
    },

    removeTodo: function() {
      var todo = this.get('model');
      todo.deleteRecord(); // Because the todo is no longer part of the collection of all todos, its <li> element in the page will be automatically removed for us.
      todo.save(); // persisting the change (the deletion)
    }
  },

  isEditing: false,

  isComplete: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      //property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being use as setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted') // what is this????????????????? -- it must be returning the value
});


// this is the itemController -- it code that works on a particular instance of the todo list that is selected

//When called from the template to display the current isCompleted 
//state of the todo, this property will proxy that question to its 
//underlying model. When called with a value because a user has toggled 
//the checkbox in the template, this property will set the isCompleted 
//property of its model to the passed value (true or false), persist 
//the model update, and return the passed value so the checkbox will 
//display correctly.
Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
      console.log("isEditing is being set to true")
    },

    acceptChanges: function() {
      this.set('isEditing', false);
      console.log("now its set to false")
      if (Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTodo'); // remove must be built into Ember.js -- I also find it intersting that we are checking if Ember isEmpty?
      } else {
        this.get('model').save();
      }
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
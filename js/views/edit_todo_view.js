Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

//ultimately I belive this code serves the sole put purpose of auto focuing upon doubling the todo.

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView) // this creates the custom handle bars helper 'edit-todo' and associates it with the EditTodoView
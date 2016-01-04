import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveItem(formData) {

      let menuItem = this.modelFor('admin.menu-items.edit');

      menuItem.setProperties(formData);

      menuItem.save().then(() => {
        this.transitionTo('admin.menu-items');
      });
    },
  },
});

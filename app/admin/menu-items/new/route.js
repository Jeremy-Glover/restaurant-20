import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
   addItem(formData) {

     let menuItem = this.store.createRecord('menu-item');

     menuItem.setProperties(formData);

     menuItem.save().then(() => {
       this.transitionTo('admin.menu-items');
     });
   },
 },
});

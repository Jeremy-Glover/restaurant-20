import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  submit(ev) {
    ev.preventDefault();

    var data = this.getProperties('menu-item');

    this.sendAction('onsubmit', data);
  },

});

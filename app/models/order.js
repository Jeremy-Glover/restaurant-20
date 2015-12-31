import DS from 'ember-data';

export default DS.Model.extend({
  paymentInfo: DS.attr('string'),
  deliveryInfo: DS.attr('string'),
  customerInfo: DS.attr('number'),
  items: DS.hasMany('order-item'),
});

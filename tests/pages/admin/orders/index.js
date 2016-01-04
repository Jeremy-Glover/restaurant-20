import PageObject from 'restaurant-20/tests/page-object';

//destructuring
//let collection = pageObject.collection and vistable = PageObject.visitable

let {visitable, collection, text} = PageObject;

function role(name) {
  return `[data-role=${name}]`;
}

export default PageObject.create({
  visit: visitable('/admin/orders'),

  //adminNav:Edit Menu Button and View Orders Button

  orders: collection({
    itemScope: role('order-detail'),

    item: {
      orderItems: collection({
        itemScope: role('order-detail-order-item'),

        item: {
          name: text(role('order-detail-order-item__name')),
          quanetity: text(role('order-detail-order-item__quantity')),
          price: text(role('order-detail-order-item__[price]')),
        },
      }),

      total: text(role('order-detail__total')),
    },
  }),

});

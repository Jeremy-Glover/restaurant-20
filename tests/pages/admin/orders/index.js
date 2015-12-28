import PageObject from 'restaurant-20/tests/page-object';

//destructuring
//let collection = pageObject.collection and vistable = PageObject.visitable

let {visitable, collection, text} = PageObject;

export default PageObject.create({
  visit: visitable('/admin/orders'),

  //adminNav:Edit Menu Button and View Orders Button

  orders: collection({
    itemScope: '.order-detail',

    item: {
      orderItems: collection({
        itemScope: '.order-detail-order-item',

        item: {
          name: text('.order-detail-order-item__name'),
          quanetity: text('order-detail-order-item__quantity'),
          price: text('.order-detail-order-item__[price]'),
        },
      }),

      total: text('.order-detail__total'),
    },
  }),
});

const basketModule = (function () {
  let basket = []
  function doSomethingPrivate() {

  }

  function doSomethingElsePrivate() {

  }

  return {
    addItem: function (values) {
      basket.push(values)
    },
    getItemCount: function () {
      return basket.length
    },
    doSomethingPrivate: doSomethingPrivate,
    doSomethingElsePrivate: doSomethingElsePrivate,
    getTotal: function () {
      let itemCount = this.getItemCount(), total = 0
      while (itemCount--) {
        total += basket[itemCount].price
      }

      return total
    },
    clear: function () {
      basket = []
    }
  }
})()

basketModule.addItem({ name: 'book', price: 100 })
basketModule.addItem({ name: 'rice', price: 100 })
const money = basketModule.getTotal()
var obj = { a: '', b: '', c: '' }
var initData = 111
Object.defineProperty(obj, 'a', {
  set: function (value) {
    initData = value
  },
  get: function () {
    return initData
  }
})

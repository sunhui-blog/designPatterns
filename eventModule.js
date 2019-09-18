class Events {
  constructor () {
    this.store = {}
    this.onceKey = []
  }

  // 订阅事件
  on (key, fn) {
    !this.store[key] && (this.store[key] = [])
    this.store[key].push(fn)
  }

  // 取消事件
  off (key) {
    this.store[key] && this.store[key] && (this.store[key] = [])
  }

  // 事件单次执行
  one (key, fn) {
    !this.store[key] && this.on(key, fn)
    this.onceKey.push(key)
  }

  // 发布事件
  emit (key, ...args) {
    if (this.store[key]) {
      this.store[key].forEach(fn => fn.apply(null, args))
      if (this.onceKey.includes(key)) {
        this.store[key] = []
        this.onceKey = this.onceKey.filter(item => item !== key)
      }
    }
  }
}

const event = new Events()


event.on('sayHello', () => { console.log('hello') })

event.emit('sayHello') // ‘hello’

event.emit('sayHello') // ‘hello’

event.off('sayHello')

event.emit('sayHello') // 不打印

event.one('sayOne', () => { console.log('one') })

event.emit('sayOne') // 'one'

event.emit('sayOne') // 不打印


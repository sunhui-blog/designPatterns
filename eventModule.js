class Events {
  constructor () {
    this._listeners = Object.create(null)
  }

  /**
  * @method on
  * @description 订阅事件
  * @public
  * @param {String} event 绑定事件
  * @param {Function} fn 绑定方法
  */
  $on (event, fn) {
    if (Array.isArray(event)) {
      event.map(v => { this.$on(v, fn) })
    }

    !this._listeners[event] && (this._listeners[event] = [])

    this._listeners[event].push(fn)
    
    return this
  }

  /**
  * @method off
  * @description 移除事件
  * @public
  * @param {String} event 取消绑定事件
  * @param {Function} fn 取消绑定方法
  */
  $off (event, fn) {
    const vm = this

    if (!arguments.length) {
      this._listeners = Object.create(null)
      return vm
    }

    if (Array.isArray(event)) {
      event.map(v => this.$off(v, fn))
      return vm
    }

    let e = vm._listeners[event]

    if (!e) {
      return vm
    }

    if (!fn) {
      vm._listeners[event] = null
      return vm
    }

    let i = e.length
    
    while (i--) {
      if (e[i] === fn || e[i].fn === fn) {
        e.splice(i, 1)
        break
      }
    }

    return vm
  }

  /**
  * @method once
  * @description 一次执行事件
  * @public
  * @param {String} event 绑定事件
  * @param {Function} fn 绑定方法
  */
  $once (event, fn) {
    var vm = this;
    
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    
    on.fn = fn;
    
    vm.$on(event, on);
    
    return vm
  }

  /**
  * @method emit
  * @description 发布事件
  * @public
  * @param {String} event 绑定事件
  * @param {Function} fn 绑定方法
  */
  $emit (event) {
    let events = this._listeners[event]
    if (events) {
      let args = toArray(arguments, 1)
      events.map(e => {
        args.length ? e.apply(this, args) : e.call(this)
      })
    }
  }
}

function toArray(list, start) {
  start = start || 0
  let i = list.length - start
  let ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

const event = new Events()

const say = function (people) {
  console.log(people + ': 123')
}

event.$on('sayHello', say)

event.$on('sayHello', (people) => { console.log(people + ': hello') })

event.$emit('sayHello', 'liming')

event.$on('sayYes', () => { console.log('yes') })

event.$emit('sayYes')

event.$off('sayHello', say)

event.$once('sayOne', () => { console.log('one') })

event.$emit('sayOne')

event.$emit('sayOne')

event.$off() // _listeners = {}
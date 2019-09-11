class Pubsub {
  constructor() {
    this.subUid = 0
    this.topics = {}
  }

  // 发送
  publish(topic, args) {
    if (!this.topics[topic]) {
      return false
    }
    let subscribe = this.topics[topic]
    let len = subscribe ? subscribe.length : 0

    while (len--) {
      subscribe[len].func(topic, args)
    }
  }

  // 订阅
  subscribe(topic, func) {
    if (!this.topics[topic]) {
      this.topics[topic] = []
    }
    this.subUid++
    this.topics[topic].push({
      token: this.subUid,
      func: func
    })
  }

  // 取消订阅
  unsubscribe(token) {
    for (let item in this.topics) {
      if (this.topics[item]) {
        this.topics[item].forEach((sub, index) => {
          if (sub.token === token) {
            this.topics[item].splice(index, 1)
          }
        });
      }
    }
  }
}

const mail = new Pubsub()

let mailCount = 0

const A = mail.subscribe('inbox/newMessage', function (topic, args) {
  console.log(topic)
  console.info(args)
  mailCount++
})

const B = mail.subscribe('inbox/newMessage', function (topic, args) {
  console.log(topic)
  console.info(args)
  mailCount++
})

// mail.unsubscribe(1) mailCount = 1

mail.publish('inbox/newMessage', [{ sender: 'hello@google.com', content: "hi,...." }])

console.log(mailCount) // mailCount = 2

const message = new Pubsub()

message.subscribe('weather', function (topic, args) {
  console.log(topic)
  console.info(args)
})

message.subscribe('weather', function (topic, args) {
  console.log(topic)
  console.info(args)
})

message.publish('weather', [{ info: '阵雨' }])
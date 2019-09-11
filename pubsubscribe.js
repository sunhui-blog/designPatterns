var pubsub = {}

var topics = {}, subUid = -1

pubsub.publish = function (topic, args) {
  if (!topics[topic]) {
    return false
  }
  console.log(1)
  var subscribers = topics[topic], len = subscribers ? subscribers.length : 0

  while (len--) {
    subscribers[len].func(topic, args)
  }
}

pubsub.subscribe = function (topic, func) {
  if (!topics[topic]) {
    topics[topic] = []
  }
  subUid++
  topics[topic].push({
    token: subUid,
    func: func
  })
}

pubsub.unsubscribe = function (token) {
  for (var m in topics) {
    if (topics[m]) {
      for (var i = 0, j = topics[m].length; i < j; i++) {
        if (topics[m][i].token === token) {
          topics[m].splice(i, 1)
          return token
        }
      }
    }
  }
  return this
}

/*---mail example---*/
var mailCounter = 0
var subscribe1 = pubsub.subscribe("inbox/newMessage", function (topic, data) {
  console.log("topic", topic)
  console.log(data)
  mailCounter++
})

var subscribe2 = pubsub.subscribe("test", function (topic, data) {
  console.log("topic", topic)
  console.log(data)
  mailCounter++
})

pubsub.publish('inbox/newMessage', [{
  sender: 'hello@google.com',
  body: 'hey...'
}])

pubsub.publish('test', [{
  sender: 'hello@google.com',
  body: 'hey...'
}])

console.log(mailCounter)

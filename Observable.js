function Seer (dataObj) {
    let signals = {}
  
    observeData(dataObj)
  
    // Besides the reactive data object, we also want to return and thus expose the observe and notify functions.
    return {
      data: dataObj,
      observe,
      notify
    }
  
    function observe (property, signalHandler) {
      if(!signals[property]) signals[property] = []
  
      signals[property].push(signalHandler)
    }
  
    function notify (signal) {
      if(!signals[signal] || signals[signal].length < 1) return
  
      signals[signal].forEach((signalHandler) => signalHandler())
    }
  
    function makeReactive (obj, key) {
      let val = obj[key]
  
      Object.defineProperty(obj, key, {
        get () {
          return val
        },
        set (newVal) {
          val = newVal
          notify(key)
        }
      })
    }
  
    function observeData (obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          makeReactive(obj, key)
        }
      }
    }
  }

  const App = new Seer({
    title: 'Game of Thrones',
    firstName: 'Jon',
    lastName: 'Snow',
    age: 25
  })
  
  // To subscribe and react to changes made to the reactive App object:
  App.observe('firstName', () => console.log(App.data.firstName))
  App.observe('lastName', () => console.log(App.data.lastName))
  
  // To trigger the above callbacks simply change the values like this:
  App.data.firstName = 'Sansa'
  App.data.lastName = 'Stark'
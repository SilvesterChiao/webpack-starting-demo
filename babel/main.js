let p = new Promise(function (reject, resolve) {
  setTimeout(function () {
    reject('Hi')
  }, 3000)
})

const array = [1, 2, 3]
array.map(n => n + 1)

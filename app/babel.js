let p = new Promise(resolve => {
  setTimeout(() => {
    resolve('Hi')
  }, 3000)
})

export default p

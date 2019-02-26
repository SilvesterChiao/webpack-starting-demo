let p = new Promise((reject, resolve) => {
    setTimeout(() => {
        reject('Hi')
    }, 3000)
})

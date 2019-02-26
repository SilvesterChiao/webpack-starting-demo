let p = new Promise(function(reject, resolve) {
    setTimeout(function() {
        reject('Hi')
    }, 3000)
})

[1, 2, 3].map(n => n + 1)
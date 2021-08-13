const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hi')
  }, 3000)
})

const o = {
  a: 1,
  b: '1213',
  c: true,
  d: [1, 2, 3],
}

const {a, b, c, d} = o

export default p

// variable di javascript
// 1. var
// 2. let
// 3. const

var nama = 'albar'
var umur = 10
var date = new Date()
var hasChild = false

// var dan let dapat di assignment ( diubah valuenya )
nama = 'donny'
let hobby = 'traveling'
hobby = 'makan'

const JENIS_KELAMIN = 'pria punya selera'

// ini bakal error ( variable konstanta tidak dapat dirubah )
// JENIS_KELAMIN = 'gatau'

//jenis console js
console.log({ nama, umur, date, hasChild, hobby, JENIS_KELAMIN })
console.error({ nama, umur, date, hasChild, hobby, JENIS_KELAMIN })
console.table({ nama, umur, date, hasChild, hobby, JENIS_KELAMIN })

console.groupCollapsed('Profile')
console.log(nama)
console.log(umur)
console.groupEnd()
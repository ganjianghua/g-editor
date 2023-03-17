const PSD = require('psd')

const psd = PSD.fromFile('../assets/images/example.psd')

psd.parse()

const tree = psd.tree().export()
console.log(JSON.stringify(tree))

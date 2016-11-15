var fs = require('fs');
var _readDir = './Products.json';
var esModule = require('./es.js')
var pacu = require("pacu")

esModule.init({
  baseUrl: 'http://yourip:9200/'
})

var getAllProduct = function (filePath) {
  return new Promise(function (resolve, reject) {
    var rawData = fs.readFileSync(filePath);
    var data = JSON.parse(rawData).results;
    console.log('   data.length: ', data.length)
    resolve(data);
  });
};


getAllProduct(_readDir).then(function (products) {
  console.log('found product: ', products.length)

  var promiseList = [];

  products.forEach(function (product) {
    promiseList.push(function () {
      return esModule.add('product', product)
    });
  })

  pacu.series(promiseList).then(function (result) {
    console.log("Result series: ", result)
  }, function (err) {
    console.log("Error series: ", result)
  });
})

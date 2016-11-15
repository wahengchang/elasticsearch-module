# elasticsearch-module

A wrapper around functions of elasticsearch.

[![NPM](https://nodei.co/npm/elasticsearch-module.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/elasticsearch-module)


## Install

```
$ npm install --save elasticsearch-module
```

# Initializing

```js


var esModule = require('elasticsearch-module')
    
esModule.init({
  baseUrl: 'http://youip:9200/'
});

```

## Usage

```js
 ### Add index


var className = 'product';
var data = { 
    "objectId": "0001", 
    "user": "dilbert", 
    "postDate": "2011-12-15", 
    "body": "Search is hard. Search should be easy." ,
    "title": "On search"
};

esModule.add(className, data).then(function(result){
    //dosomething() ....
},function(err){
    //dosomethingElse() ....
});

```


## Usage

```js
 ### Add index


var className = 'product';
var _search = 'pretty' -d' { "query": { "fuzzy" : { "description" : "The solar system", "fuzziness": 2 } } }';
//var _search = 'q=body:Search';

esModule.add(className, _search).then(function(result){
    //dosomething() ....
},function(err){
    //dosomethingElse() ....
});

```


## License


[MIT](http://vjpr.mit-license.org)
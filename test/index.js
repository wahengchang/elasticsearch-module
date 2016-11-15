
var esModule = require('../index.js')
var should = require('should')



describe('Test init()', function() {
  this.timeout(40000);

  it('Test init(), empty input', function(done) {
      console.log(esModule.init())
    esModule.init().should.be.eql(false);
    done();
  });

  it('Test init(), missing parameters', function(done) {
    esModule.init({baseUrl: ''}).should.be.eql(false);
    done();
  });

  it('Test init(), happy path', function(done) {
    esModule.init({
      baseUrl: 'http://youip:9200/'
    }).should.be.eql(true);
    done();
  });
})

describe('Test add()', function () {
    var className = 'product';
    var data = { 
        "objectId": "0001", 
        "user": "dilbert", 
        "postDate": "2011-12-15", 
        "body": "Search is hard. Search should be easy." ,
        "title": "On search"
    };

    this.timeout(10000);
  
    it('es.add', function (done) {
        esModule.add(className, data).then(function(result){
            console.log('result:', result)
            done();
        },function(err){
            console.log(err);
            done('err:'+err);
        });
    });

    it('es.search', function (done) {
        var _str = 'q=objectId:0001&pretty=true';
        esModule.search(className, _str).then(function(result){
            console.log('result:', result)
            done();
        },function(err){
            console.log(err);
            done('err:'+err);
        });
    });


    it('es.search', function (done) {
        var _str = 'q=body:Search&pretty=true';
        esModule.search(className, _str).then(function(result){
            console.log('result:', result)
            done();
        },function(err){
            console.log(err);
            done('err:'+err);
        });
    });
});


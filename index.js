var request = require('request')

function esModule() {

    var baseUrl ;
    var isInit = false ;

    function init(_initJson) {
        if (!_initJson) {
            console.error("Missing config values");
            return false;
        } else {
            baseUrl = _initJson.baseUrl;

            if (!baseUrl) {
                console.error("Missing config values");
                return false;
            } else {
                console.error("Init finished");
                isInit = true;
                return true;
            }
        }
    };

    function add(_class, _json) {
        return new Promise(function (resolve, reject) {
            var url = baseUrl  + 'istaging/' +_class +'/'+ _json.objectId;
            
            var options = {
                url: url,
                json:  _json,
                method: 'PUT'
            };

            request(options, function (err, res, body) {
                if (!err && (res.statusCode === 200 || res.statusCode === 201)) {
                    // console.log('updated ...', body._index, body._id)
                    resolve(body)
                } else {
                    reject(err)
                }
            });

        })
    }

    function search(_class, _str) {
        return new Promise(function (resolve, reject) {
            var url = baseUrl  + 'istaging/' +_class +'/_search?'+_str;

            console.log('url: ', url)

            request(url, function (err, response, body) {
                // console.log('err: ', err)
                // console.log('response.statusCode: ', response.statusCode)
                // console.log('body: ', body)
                if (!err && response.statusCode == 200) {
                    resolve(body)
                }
                else {
                    reject(err)
                }
            })
        })
    }


    return {
        init: init,
        search: search,
        add: add
    };
}


module.exports = (function () {
    // Singleton instance goes into this variable
    var instance;

    // Singleton factory method
    function factory() {
        return esModule();
    }

    // Singleton instance getter
    function getInstance() {
        // If the instance does not exists, creates it
        if (instance === undefined) {
            instance = factory();
        }

        return instance;
    }

    // Public API definition
    return (function () {
        {
            // If the instance does not exists, creates it
            if (instance === undefined) {
                instance = factory();
            }

            return instance;
        }
    })();
})();


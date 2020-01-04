var assert    = require("assert")
var fs        = require('fs')

describe('wappalyzer', function(){
  describe('detectFromUrl', function(){
    it('should have the expected apps detected', function(done){

      var wappalyzer = require("../index");

      var expect = ['AngularJS','Font Awesome','Google Font API','Twitter Bootstrap','jQuery'];

      var options={
        url : "http://codelanka.github.io/Presentation-Engines",
        hostname:"codelanka.github.io",
        debug:false
      }

      wappalyzer.detectFromUrl(options,function  (err,apps) {
        assert.equal(expect[0], apps[0]);
        assert.equal(expect[1], apps[1]);
        assert.equal(expect[2], apps[2]);
        assert.equal(expect[3], apps[3]);
        done();
      })

    })
  })
  describe('detectFromHTML', function(){
    it('should have the expected apps detected when passed raw info', function(done){

      var wappalyzer = require("../index");

      var expect = ['AngularJS','Font Awesome','Google Font API','Twitter Bootstrap','jQuery'];

      var options={
        url : "http://codelanka.github.io/Presentation-Engines",
        hostname:"codelanka.github.io",
        debug:false
      }

      var data = {

        url: options.url,
        headers: require('./sample.headers.json'),
        html: fs.readFileSync('./test/sample.html').toString(),
        headers: {

          headers: {}

        }

      };

      wappalyzer.detectFromHTML(options, data, function  (err,apps) {

        assert.equal(expect[0], apps[0]);
        assert.equal(expect[1], apps[1]);
        assert.equal(expect[2], apps[2]);
        assert.equal(expect[3], apps[3]);
        done();
      })

    })
  })
})

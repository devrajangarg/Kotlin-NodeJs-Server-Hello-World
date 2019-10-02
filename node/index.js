(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main$lambda(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Hello World\n');
  }
  function main$lambda_0() {
    println('Server running at http://127.0.0.1:3000/');
  }
  function main(args) {
    println('Hello JavaScript!');
    var http = require('http');
    var hostname = '127.0.0.1';
    var port = 3000;
    println('Server will try to run at http://127.0.0.1:3000/');
    var server = http.createServer(main$lambda);
    server.listen(port, hostname, main$lambda_0);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=index.js.map

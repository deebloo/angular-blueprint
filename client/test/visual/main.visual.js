/**
* @module Main Controller Visual QA
* A CasperJS task to create screenschots of page elements for automated visual regression teseting
*/
casper.start('http://localhost:9001/')
.then(function() {
  phantomcss.screenshot('.header', 'Nav');
})
.then(function() {
  phantomcss.screenshot('.footer', 'Footer');
})
.then(function() {
  phantomcss.screenshot('h1', 'H1');
});
/**
* @todo
* Include more advanced CasperJS commands to show dynamic content
* Such As:
* [casper.waitForSelector]{@link http://casperjs.readthedocs.org/en/latest/modules/casper.html#waitforselector}
* [casper.click]{@link http://casperjs.readthedocs.org/en/latest/modules/casper.html#click}
* And using angular.element().scope to modify $scope.
* /
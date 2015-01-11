'use strict';

/**
 * @ngdoc directive
 * @name Header
 * @description
 * Directive Boilerplate
 */
(function() {

  angular
    .module('myApp')
    .directive('header', header);

  function header() {
  	/**
  	* @name headerOptions
  	* @memberof Header
  	* @property templateUrl {String} - Link to HTML template
  	* @property retrict {Enum} - Restrict directive to element or attribute
  	* @property scope {headerScope}
  	*/
  	/**
  	* @typedef headerScope
  	* @memberof Header
  	* @property someScopeVar {String}
  	* @property anotherVar {Boolean}
  	*/
    return {
    	templateUrl: 'components/header/header.html',
    	restrict: 'EA',
    	scope: {
    		someScopeVar: null,
    		anotherVar: null
    	},
    	link: function() { // $scope, $element, $attributes) {

    	}
    };
  }

}());

import isActive from './is-active/is-active.service';

var moduleName = 'MyApp.services';

angular.module(moduleName, []).factory('isActive', isActive);

export default moduleName;
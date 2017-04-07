(function() {
"use strict";

angular.module('common', ['ngMessages'])
.constant('ApiPath', 'https://tranquil-sands-37157.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

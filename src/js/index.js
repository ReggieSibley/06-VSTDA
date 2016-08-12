/*
1.Two way data binding using the ng-model directive and one way 
data binding using the {{}} bindings (commonly called moustache 
brackets!).
2.Click event binding using the ng-click directive.
3.Dynamic CSS using the ng-class directive.
4.Iteration using the ng-repeat directive.
5.Filtering using Angular Filters. (Research what these are first!)
*/

/* ng-model ng-class ng-repeat filer */

var app = angular.module("myApp", [])
.controller("mainCtrl", function($scope){
	$scope.tasklist = [];
	$scope.task = {};
	$scope.addTask = function (){
		$scope.tasklist.push(angular.copy($scope.task));
	}

});



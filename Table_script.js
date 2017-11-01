angular.module('Appmodule', [])
.controller('myctrl', ['$scope',function($scope) {
  $scope.items = [
			{

			salary_head_name : 'BASIC',
			salary_head_value : 15000,
			salary_head_type : 'E'

            }, {
			salary_head_name : 'HRA',
			salary_head_value : 7500,
			salary_head_type : 'E'
            },{
			salary_head_name : 'Conveyance',
			salary_head_value : 1600,
			salary_head_type : 'E'

            },{

			salary_head_name : 'Med. Allow',
			salary_head_value : 1800,
			salary_head_type : 'E'

            },{

			salary_head_name : 'PF',
			salary_head_value : 1800,
			salary_head_type : 'D'

            }];
}]);
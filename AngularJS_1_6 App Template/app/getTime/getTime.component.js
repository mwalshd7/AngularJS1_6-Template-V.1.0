//Angular Component

angular.
        module('getTime').
        component('getTime', {
            templateUrl: 'app/getTime/getTime.template.html',
            
            controller: function getTime($scope){
                $scope.time = new Date();
               }
});

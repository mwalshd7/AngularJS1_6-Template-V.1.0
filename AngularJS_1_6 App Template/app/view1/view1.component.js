angular.
        module('view1').
            component('view1', {
                templateUrl:'app/view1/view1.template.html',
                
                controller:['$scope', 'shareTime', function($scope, shareTime){
                var self = this;
                self.time = shareTime.currentTime;
               }
                
                /*[ '$http', 
                    function CardReadController($http){
                        var self = this;
                    
                    $http.get("http://127.0.0.1:8887/data/mikeoutput_temp.json").then(function(response) {
                        self.response = response.data.?****?;
                        console.log(self.response);
                    });
                }*/ 
            ]
			
});





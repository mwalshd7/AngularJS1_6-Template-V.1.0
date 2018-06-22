//Angular Controller

angular.
        module('view2').
            component('view2', {
                templateUrl:'app/view2/view2.template.html'/* ,
                
                controller:['$http', 
                    function listViewController($http){
                    var self = this;
      
                    $http.get("http://127.0.0.1:8887/data/mikeoutput_temp.json").then(function(response) {
                    self.lists = response.data.tt_ediRead;
                    //console.log(self.lists);
                    });
                }
            ]     */
});





angular.
        module('view2').
            component('view2', {
                templateUrl:'app/view2/view2.template.html',
                
                controller: function($scope, shareTime){
                var self = this;
                self.time = shareTime.currentTime;
               }
                
  });





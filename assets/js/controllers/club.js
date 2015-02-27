myApp.controller("swiderCtrl", function($scope, Club) {
    $scope.drills = Club.getDrills();
    $scope.addSwider = function(newDrill) {
        Club.addSwider(
            {
                name: newDrill.name,
            }
        );
         resetCreateForm();
    };
    $scope.updateDrill = function (drill) {
        Club.updateDrill(drill);
    };

    $scope.removeDrill = function (drill) {
        Club.removeDrill(drill);
    };
    
    $scope.currentClub = null;
   
    
    function isCurrentSwider(drill) {
        return $scope.currentClub !== null && drill.name === $scope.currentClub.name;
    }
    
    function setCurrentSwider(drill) {
        $scope.currentClub = drill;
    }
    
    $scope.isCurrentSwider = isCurrentSwider;
    $scope.setCurrentSwider = setCurrentSwider;
    
    
     $scope.isCreatingSwider = false;
        $scope.isEditingDrill = false;
        
        
        function startCreatingSwider() {
              $scope.isCreatingSwider = true;
              $scope.isEditingDrill = false;
              resetCreateForm();
        }

        function cancelCreatingClub() {
              $scope.isCreatingSwider = false;
        }
          
        function startEditingSwider() {
              $scope.isCreatingSwider = false;
              $scope.isEditingDrill = true;
        }

        function cancelEditingDrill() {
              $scope.isEditingDrill = false;
              $scope.editedDrill = null;
        }
        
        function shouldShowCreatingClub(){
            return $scope.currentClub && !$scope.isEditingDrill;
        }
        
        function shouldShowEditingClub(){
            return $scope.isEditingDrill && !$scope.isCreatingSwider;
        }
        
        
        $scope.startCreatingSwider =startCreatingSwider ;
        $scope.cancelCreatingClub =cancelCreatingClub ;
        $scope.startEditingSwider = startEditingSwider;
        $scope.cancelEditingDrill =cancelEditingDrill ;
        $scope.shouldShowCreatingClub = shouldShowCreatingClub;
        $scope.shouldShowEditingClub = shouldShowEditingClub;
        
        
        
        function resetCreateForm() {
          $scope.newClub = {
              name: ''
          };
         }

      
      $scope.editedDrill = null;
      $scope.editedDrillId = null;
      
      function setEditedSwider(Club){
          $scope.editedDrill = angular.copy(Club);
      }
      
      $scope.setEditedSwider = setEditedSwider;
      
    
});
myApp.controller("playerCtrl", function($scope, Player) {
    $scope.players = Player.getPlayers();
    
    $scope.positions = [
            { "name": "1"},
            { "name": "2"},
            { "name": "3"},
            { "name": "4"},
            {"name": "5"},
            {"name": "7"}
    ];
    
    
    $scope.addPlayer = function(newPlayer) {
        
        Player.addPlayer(
            {
                name: newPlayer.name,
                url: newPlayer.url,
                position: newPlayer.position,
                club: newPlayer.club
            }
        );
        
        resetCreateForm();
    };
    $scope.updatePlayer = function (player) {
        
        
        Player.updatePlayer(player);
    };

    $scope.removePlayer = function (player) {
        Player.removePlayer(player);
    };
    
    $scope.isCreatingPlayer = false;
        $scope.isEditingPlayer = false;
        
        
        function startCreatingPlayer() {
              $scope.isCreatingPlayer = true;
              $scope.isEditingPlayer = false;
              resetCreateForm();
        }

        function cancelCreatingPlayer() {
              $scope.isCreatingPlayer = false;
        }
          
        function startEditingPlayer() {
              $scope.isCreatingPlayer = false;
              $scope.isEditingPlayer = true;
        }

        function cancelEditingPlayer() {
              $scope.isEditingPlayer = false;
              $scope.editedPlayer = null;
        }
        
        function shouldShowCreatingPlayer(){
            return $scope.currentClub && !$scope.isEditingPlayer;
        }
        
        function shouldShowEditingPlayer(){
            return $scope.isEditingPlayer && !$scope.isCreatingPlayer;
        }
        
        
        $scope.startCreatingPlayer =startCreatingPlayer ;
        $scope.cancelCreatingPlayer =cancelCreatingPlayer ;
        $scope.startEditingPlayer = startEditingPlayer;
        $scope.cancelEditingPlayer =cancelEditingPlayer ;
        $scope.shouldShowCreatingPlayer = shouldShowCreatingPlayer;
        $scope.shouldShowEditingPlayer = shouldShowEditingPlayer;
        
        
        
        function resetCreateForm() {
          $scope.newPlayer = {
              name: '',
              url: '',
              position: '',
              club: ''
          };
         }


      
      $scope.editedPlayer = null;

      function setEditedPlayer(player){
          $scope.editedPlayer = angular.copy(player);
      }
      
      $scope.setEditedPlayer = setEditedPlayer;
      
      
  

    
});
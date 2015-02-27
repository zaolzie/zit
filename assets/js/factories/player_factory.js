myApp.factory("Player", function($firebase, FIREBASE_URI) {
    
    var ref = new Firebase(FIREBASE_URI+"/player");    
    var sync = $firebase(ref);
    
    var Player = sync.$asArray();
    var getPlayers = function() {
        return Player;
    }
    
    var addPlayer = function(newPlayer) {
        Player.$add(newPlayer);
    }
    
    var removePlayer = function(player) {
        
        
        var playersRef = new Firebase(FIREBASE_URI+"/player");
            Player.list = $firebase(playersRef);
    
    
        Player.list.$remove(player.$id);
    }
    
    var updatePlayer = function (player) {
        
        // Get the Firebase reference of the item
        var itemRef = new  Firebase(FIREBASE_URI + "/player/" + player.$id);

        // Firebase : Update the item
         $firebase(itemRef).$set({
             id: player.$id,
             name : player.name,
            url: player.url,
            position: player.position,
            club: player.club
         });

        //player.$save(id);
    };
    
    
    return {
        getPlayers: getPlayers,
        addPlayer: addPlayer,
        removePlayer: removePlayer,
        updatePlayer: updatePlayer,
    }
});
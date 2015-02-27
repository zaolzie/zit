myApp.factory("Club", function($firebase, FIREBASE_URI) {
    
    var ref = new Firebase(FIREBASE_URI+"/club");    
    var sync = $firebase(ref);
    
    var Drill = sync.$asArray();
    var getDrills = function() {
        return Drill;
    }
    
    var addSwider = function(newClub) {
        Drill.$add(newClub);
    }
    
    var removeDrill = function(drill) {
        var ClubRef = new Firebase(FIREBASE_URI+"/club");
            Drill.list = $firebase(ClubRef);
    
    
        Drill.list.$remove(drill.$id);
        // club.$remove(id);
    }
    
    var updateDrill = function (drill) {
        // Get the Firebase reference of the item
        var itemRef = new  Firebase(FIREBASE_URI + "/club/" + drill.$id);

        // Firebase : Update the item
         $firebase(itemRef).$set({
             id: drill.$id,
             name : drill.name

         });
        // club.$save(id);
    };
    
    
    return {
        getDrills: getDrills,
        addSwider: addSwider,
        removeDrill: removeDrill,
        updateDrill: updateDrill,
    }
});
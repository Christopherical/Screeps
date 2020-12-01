var unitConqueror = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let enemies = creep.room.find(FIND_HOSTILE_CREEPS)
        let enemyBuildings = _.filter(creep.room.find(FIND_HOSTILE_STRUCTURES), (structure) => structure != creep.room.controller  && structure.structureType != "storage")
        let structurez = creep.room.find(FIND_STRUCTURES)
    
  
        
        var attackyThing = Game.getObjectById('5e64415f02448033ecf05fc4')
        
        let thing = true
        // creep.attack(wallT)
        
        
         if(enemyBuildings.length > 0 && thing){
           
            let closestBuilding = creep.pos.findClosestByPath(enemyBuildings);
           
            if(creep.attack(closestBuilding) == ERR_NOT_IN_RANGE){
                creep.moveTo(closestBuilding);
            }
        }
      
        else if(enemies.length > 0 && thing){
            let closestEnemy = creep.pos.findClosestByPath(enemies);
            if(creep.attack(closestEnemy) == ERR_NOT_IN_RANGE){
                creep.moveTo(closestEnemy);
            }
            
        }
      
        else if(enemyBuildings.length > 0 && thing){
           
            let closestBuilding = creep.pos.findClosestByPath(enemyBuildings);
           
            if(creep.attack(closestBuilding) == ERR_NOT_IN_RANGE){
                creep.moveTo(closestBuilding);
            }
        }
      
          else if(creep.name == 'attackBoi3'){
            if(Game.creeps['attackBoi']){
                creep.moveTo(Game.creeps['attackBoi'])
            }
        }
        else if(creep.name == 'Conqueror1'){
            if(creep.room.name == 'W21S32'){
                creep.moveTo(21, 0)
            }
            else{
                creep.moveTo(21, 49)
            }
        }
        else if(creep.name == 'attackBoi'){
                if(creep.room.name == 'W21S33'){
                    creep.moveTo(23, 49)
                    
                }
                 else if(creep.room.name == 'W21S34'){
                    creep.moveTo(23, 49)
                }
                else if(creep.room.name == 'W21S35'){
                    creep.moveTo(11, 41)
                }
                 else if(creep.room.name == 'W22S35'){
                    creep.moveTo(49, 25)
                }
                
                //creep.moveTo(Game.getObjectById('5e2b36ce43eed44133be8269'))
                //creep.move(RIGHT)
            
            
        }
         else if(creep.name == 'attackBoi2'){
              if(creep.room.name == 'W21S32'){
                    creep.moveTo(17, 49)
                    
                }
             
                else if(creep.room.name == 'W21S33'){
                    creep.moveTo(23, 49)
                    
                }
                 else if(creep.room.name == 'W21S34'){
                    creep.moveTo(23, 49)
                }
                else if(creep.room.name == 'W21S35'){
                    creep.moveTo(0, 28)
                }
                 else if(creep.room.name == 'W22S35'){
                    creep.moveTo(37, 49)
                }
                
                //creep.moveTo(Game.getObjectById('5e2b36ce43eed44133be8269'))
                //creep.move(RIGHT)
            
            
        }
        
            
        
	}
};

module.exports = unitConqueror;
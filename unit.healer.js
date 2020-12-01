var unitHealer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var alliedUnits = creep.room.find(FIND_MY_CREEPS)
        var damagedAllies = _.filter(alliedUnits, (unit) => unit.hits < unit.hitsMax)
        
        
        if(damagedAllies.length > 0){
            creep.moveTo(damagedAllies[0])
            if(creep.heal(damagedAllies[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(damagedAllies[0])
            }
        }
        else{
            if(Game.creeps['attackBoi']){
                creep.moveTo(Game.creeps['attackBoi'])
            }
            else{
                creep.moveTo(25, 48)    
            }
            
        }    
	}
};

module.exports = unitHealer;
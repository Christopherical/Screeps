var unitClaimer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.room.name == Game.spawns[creep.memory.spawner].room.name){
            creep.moveTo(creep.memory.xLocation, creep.memory.yLocation)
        }
        else{
            if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller)
            }
        }
	}
};

module.exports = unitClaimer;
var unitFunctions = {

    /** @param {Creep} creep **/
    fullFlag: function(creep) {
        if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == creep.store.getCapacity(RESOURCE_ENERGY)){
            creep.memory.full = false;
        }
        else if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0){
            creep.memory.full = true;
        }
	},
	renewCreepFlag: function(creep){
	    if(creep.ticksToLive < 80) {
	        creep.memory.renewMe = true;
	    }
	    else if(creep.ticksToLive > 1400){
	        creep.memory.renewMe = false;
	    }
	},
// 	upgraderPartsGenerator:  function(spawn){
// 	    let roomEnergyAmount = Math.floor((spawn.room.energyAvailable - 200) / 200);
// 	    let upgraderParts = [WORK, WORK, CARRY, MOVE];
// 	    for(i = 0; i < roomEnergyAmount; i++){
// 	        if(i == stopper){
// 	            break;
// 	        }
// 	        upgraderParts = upgraderParts.concat(WORK, WORK);
// 	    }
// 	    if(excess && roomEnergyAmount > 1){
// 	        upgraderParts.push(MOVE)
// 	    }
// 	    return upgraderParts;
// 	},
	
	basicPartsGenerator:  function(spawn, parts, divider, stopper, excess){
	    let roomEnergyAmount = Math.floor((spawn.room.energyAvailable - excess) / divider);
	    let replenParts = [];
	    for(i = 0; i < roomEnergyAmount; i++){
	        if(i == stopper){
	            break;
	        }
	        replenParts = replenParts.concat(parts);
	    }
	    if(excess && roomEnergyAmount > 1){
	        replenParts.push(MOVE)
	    }
	    return replenParts;
	}
	
};

module.exports = unitFunctions;
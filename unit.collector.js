var unitCollector = {

    /** @param {Creep} creep **/
    run: function(creep, unitFunctions) {
        let floorEnergy = _.filter(creep.room.find(FIND_DROPPED_RESOURCES), (target) => target.resourceType == "energy" && target.energy > creep.store.getCapacity(RESOURCE_ENERGY) / 2 );
        unitFunctions.fullFlag(creep);
        
        
        
        if(creep.room.name == Game.spawns[creep.memory.spawner].room.name){
            if(!creep.memory.full){
                if(floorEnergy.length > 0){
                    let closestFloor = creep.pos.findClosestByPath(floorEnergy)
                    if(creep.pickup(closestFloor) == ERR_NOT_IN_RANGE){
                        creep.moveTo(closestFloor)
                    }
                }
                else{
                    creep.moveTo(creep.memory.xLocation, creep.memory.yLocation)
                }
            }
            else{
                let terminalStorage = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "terminal" && structure.store.getUsedCapacity() != 300000);
                let storageStorage = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "storage");
                if(terminalStorage.length > 0){
                    if(creep.transfer(terminalStorage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(terminalStorage[0])
                    }
                }
                else if(storageStorage.length > 0){
                    if(creep.transfer(storageStorage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(storageStorage[0])
                    }
                }
            }
        }
        else{
            let structurez = _.filter(creep.room.find(FIND_STRUCTURES), (roadz) => roadz.structureType == 'road' && roadz.pos.isEqualTo(creep.pos) && roadz.hits < roadz.hitsMax)
            let footRoad = _.filter(structurez, (roadz) => roadz.pos.isEqualTo(creep.pos))
            
            if(structurez.length > 0){
                creep.repair(structurez[0])
            }
            if(!creep.memory.full){
                let containers = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "container");
                let containersFull = _.filter(containers, (structure) => structure.store.getUsedCapacity(RESOURCE_ENERGY) > creep.store.getFreeCapacity(RESOURCE_ENERGY));
                if(floorEnergy.length > 0 ){
                    if(creep.pickup(floorEnergy[0]) == ERR_NOT_IN_RANGE){
                        creep.moveTo(floorEnergy[0])
                    }
                }
                else if(containersFull.length > 0){
                    if(creep.withdraw(containersFull[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(containersFull[0]);
                    }
                }
                else if(containers.length > 0){
                    if(creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(containers[0]);
                    }
                }
            }
            else{
                creep.moveTo(creep.memory.returnX, creep.memory.returnY)
            }
        }
        
	}
};

module.exports = unitCollector;
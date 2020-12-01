var jobUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep, unitFunctions) {
        
        let spawnCount = creep.room.find(FIND_MY_SPAWNS)
        let floorEnergy = _.filter(creep.room.find(FIND_DROPPED_RESOURCES), (target) => target.resourceType == "energy" && target.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY));
        
       
        // console.log(creep.room.find(FIND_DROPPED_RESOURCES).filter(thing => thing.resourceType == "energy").length)
    
        unitFunctions.fullFlag(creep);
        if(spawnCount.length > 1){
            unitFunctions.renewCreepFlag(creep);
        }
        
        if(!creep.memory.renewMe){
            if(!creep.memory.full){
                let resourceHolders = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => (structure.structureType == 'container' || structure.structureType == 'storage' || structure.structureType == 'link' || structure.structureType == 'terminal')
                
                && structure.store.getUsedCapacity(RESOURCE_ENERGY) > creep.store.getFreeCapacity(RESOURCE_ENERGY));  
                let closestLink = creep.pos.findClosestByPath(resourceHolders)
                if(floorEnergy.length > 0){
                        if(creep.pickup(floorEnergy[0]) == ERR_NOT_IN_RANGE){
                            creep.moveTo(floorEnergy[0])
                        }
                    }
                else if(closestLink){
                    if(creep.withdraw(closestLink, RESOURCE_ENERGY, creep.store.getFreeCapacity(RESOURCE_ENERGY)) == ERR_NOT_IN_RANGE){
                        creep.moveTo(closestLink);
                    }
                }
            }
            else{
                let sites = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(sites.length > 0){
                        let closestConstructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES)
                        if(creep.build(closestConstructionSite) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(closestConstructionSite);
                        }
                    }
                else if(creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.room.controller)
                }
            }    
        }
        else{
            let closestSpawn = creep.pos.findClosestByPath(creep.room.find(FIND_MY_SPAWNS))
            if(closestSpawn){
                if(closestSpawn.renewCreep(creep) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestSpawn)
                }
            }
        }
        
	}
};

module.exports = jobUpgrader;
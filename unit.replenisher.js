var unitReplenisher = {

    /** @param {Creep} creep **/
    run: function(creep, unitFunctions) {
        
        unitFunctions.fullFlag(creep);
        unitFunctions.renewCreepFlag(creep);
        
        if(!creep.memory.renewMe){
            let structurez = creep.room.find(FIND_STRUCTURES)
            var theStorage = _.filter(structurez, (structure) => structure.structureType == "storage");
            let theTerminal = _.filter(structurez, (structure) => structure.structureType == "terminal");
            let theContainers = _.filter(structurez, (structure) => structure.structureType == "container");
            if(!creep.memory.full){
                let floorEnergy = _.filter(creep.room.find(FIND_DROPPED_RESOURCES), (target) => target.resourceType == "energy" && target.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY));
                if(floorEnergy.length > 0){
                        if(creep.pickup(floorEnergy[0]) == ERR_NOT_IN_RANGE){
                            creep.moveTo(floorEnergy[0])
                        }
                    }
                else if(theStorage.length > 0 && theStorage[0].store.getUsedCapacity(RESOURCE_ENERGY) > creep.store.getFreeCapacity(RESOURCE_ENERGY)){
                    if(creep.withdraw(theStorage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(theStorage[0]);
                    }
                }
                else if(theTerminal.length > 0 && theTerminal[0].store.getUsedCapacity(RESOURCE_ENERGY) > creep.store.getFreeCapacity(RESOURCE_ENERGY)){
                    if(creep.withdraw(theTerminal[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(theTerminal[0]);
                    }
                }
                else if(theContainers.length > 0 && theContainers[0].store.getUsedCapacity(RESOURCE_ENERGY) > creep.store.getFreeCapacity(RESOURCE_ENERGY)){
                    if(creep.withdraw(theContainers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(theContainers[0]);
                    }
                }
                else{
                    let sources = creep.room.find(FIND_SOURCES);
                    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
                        creep.moveTo(sources[0]);
                    }
                }
            }
            else{
                let fuelStructures = _.filter(structurez, (structure) => (structure.name == creep.memory.spawner || (structure.structureType == "tower" && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 50)) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
                let replenExtensions = _.filter(structurez, (structure) => (structure.structureType == "extension") && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
                
                let linkBois = theStorage[0].pos.findInRange(_.filter(structurez, (structure) => structure.structureType  == "link" && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0), 3)
               
                fuelStructures = fuelStructures.concat(linkBois)
                
                if(replenExtensions.length > 0){
                    let closestReplenExtension = creep.pos.findClosestByPath(replenExtensions);
                    if(creep.transfer(closestReplenExtension, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(closestReplenExtension);
                    }
                }
                else if(fuelStructures.length > 0){
                    let closestFuelStructure = creep.pos.findClosestByPath(fuelStructures);
                    if(creep.transfer(closestFuelStructure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(closestFuelStructure);
                    }
                }
                else{
                    if(theStorage.length > 0){
                        if(theStorage[0].store.getUsedCapacity(RESOURCE_ENERGY) > 75000){
                            if(creep.transfer(theTerminal[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                                creep.moveTo(theTerminal[0])
                            }
                        }
                    }
                }
            }
        }
        else{
            let closestSpawn = creep.pos.findClosestByPath(creep.room.find(FIND_MY_SPAWNS))
            if(closestSpawn){
                if(closestSpawn.renewCreep(creep) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestSpawn)
                }
                else if(closestSpawn.renewCreep(creep) == ERR_NOT_ENOUGH_ENERGY){
                    creep.memory.renewMe = false
                }
                else if(closestSpawn.spawning){
                    creep.memory.renewMe = false
                }
            }
        }
	}
};

module.exports = unitReplenisher;
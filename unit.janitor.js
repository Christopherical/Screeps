var unitJanitor = {

    /** @param {Creep} creep **/
    run: function(creep, unitFunctions) {
        
       
        unitFunctions.fullFlag(creep);
        
        // Not Full: Clean dropped energy -> Takes Energy from Containers (if they can instantly fill) -> Takes Energy from containers. 
        // Full: Drop off to Link[0] -> Drop off to Storage2[0] -> Withdraw from Storages[0] if Link[0] is not full.
   
        //When not full.
        if(!creep.memory.full){
            let floorEnergy = _.filter(creep.room.find(FIND_DROPPED_RESOURCES), (target) => target.resourceType == "energy" && target.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY));
            let containers = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "container" && structure.store.getUsedCapacity(RESOURCE_ENERGY) > 0);
            let containersFull = _.filter(containers, (structure) => structure.store.getUsedCapacity(RESOURCE_ENERGY) > creep.store.getFreeCapacity(RESOURCE_ENERGY));
            if(floorEnergy.length > 0){
                let closestFloor = creep.pos.findClosestByPath(floorEnergy)
                if(creep.pickup(closestFloor) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestFloor)
                }
            }
            else if(containersFull.length > 0){
                let closestContainer = creep.pos.findClosestByPath(containersFull)
                    if(creep.withdraw(closestContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(closestContainer);
                    }
            }
            else if(containersFull.length > 0){
                let closestNotFullContainer = creep.pos.findClosestByPath(containers)
                if(creep.withdraw(closestNotFullContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestNotFullContainer);
                }
            }
        }
        //When Full.
        else{
            let exSites = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "extension" && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0);
            let storages = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "storage");
            let links = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "link");
            if(creep.room.energyAvailable < 1000){
                if(Game.spawns[creep.memory.spawner].energy != 300) {
                    if(creep.transfer(Game.spawns[creep.memory.spawner], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(Game.spawns[creep.memory.spawner]);
                    }
                }
                //Resupply Extensions.
                else if(exSites.length > 0){
                    let closestExtension = creep.pos.findClosestByPath(exSites);
                    if(creep.transfer(closestExtension, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(closestExtension);
                    }
                }
            }
            else if(links.length > 0){
                if(links[0].store.getFreeCapacity(RESOURCE_ENERGY) > 399){
                    if(creep.transfer(links[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(links[0])
                    }
                }
                else if(creep.transfer(storages[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(storages[0])
                }
            }
            
            else if(creep.transfer(storages[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(storages[0])
            }
        }
	}
};

module.exports = unitJanitor;
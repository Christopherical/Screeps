var basicWorker = {

    /** @param {Creep} creep **/
    run: function(creep, unitFunctions) {
        let floorEnergy = _.filter(creep.room.find(FIND_DROPPED_RESOURCES), (target) => target.resourceType == "energy" && target.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY));
        let energyStorages = _.filter(creep.room.find(FIND_STRUCTURES), (structure) => (structure.structureType == 'container' || structure.structureType == 'terminal' ||structure.structureType == 'storage'));
        let withdrawLocations = _.filter(energyStorages, (structure) => (structure.store.getUsedCapacity(RESOURCE_ENERGY) > creep.store.getFreeCapacity(RESOURCE_ENERGY)));
        
          var sources = creep.room.find(FIND_SOURCES);
        unitFunctions.fullFlag(creep);
      
        if(!creep.memory.full){
            if(floorEnergy.length > 0){
                let closestFloor = creep.pos.findClosestByPath(floorEnergy)
                if(creep.pickup(closestFloor) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestFloor);
                }
            }
             else if(withdrawLocations.length > 0){
                let closestLocation = creep.pos.findClosestByPath(withdrawLocations);
                if(creep.withdraw(closestLocation, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(closestLocation);
                }
            }
            else{
                if(creep.harvest(sources[creep.memory.eSource]) == -9){
                    creep.moveTo(sources[creep.memory.eSource]);
                }
            }
        }
        else{
            let sites = creep.room.find(FIND_CONSTRUCTION_SITES);
            //Build
            if(sites.length > 0){
                let closestConstructionSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES)
                if(creep.build(closestConstructionSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestConstructionSite);
                }
            }
            //Upgrade Controller
            else{
                if(creep.transfer(creep.room.controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
	}
};

module.exports = basicWorker;
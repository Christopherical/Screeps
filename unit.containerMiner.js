var unitContainerMiner = {

    /** @param {Creep} creep **/
    run: function(creep, unitFunctions) {
        
        unitFunctions.fullFlag(creep);
        if(creep.room.name == Game.spawns[creep.memory.spawner].room.name){
            creep.moveTo(creep.memory.xLocation, creep.memory.yLocation)
        }
        else{
            let sites = creep.room.find(FIND_CONSTRUCTION_SITES)
            let sources = creep.room.find(FIND_SOURCES);
            let closestContainer = sources[creep.memory.eSource].pos.findClosestByRange(_.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "container"));
            //When the miner is not full:
            if(closestContainer && !creep.pos.isEqualTo(closestContainer.pos) && sites.length == 0){
                creep.moveTo(closestContainer)
            }
            else{
                if(!creep.memory.full){
                    if(sources[creep.memory.eSource].energy > 0){
                        if(creep.harvest(sources[creep.memory.eSource]) == ERR_NOT_IN_RANGE){
                            creep.moveTo(sources[creep.memory.eSource]);
                        }
                    }
                }
                //When the miner is full:
                else{
                    
                    let closeDamagedStructures = creep.pos.findInRange(_.filter(creep.room.find(FIND_STRUCTURES), (structurez) => structurez.hits < structurez.hitsMax && structurez.structureType == 'container'), 2)
                    
                    //Build structures.
                    if(sites.length > 0){
                        let closestSite = creep.pos.findClosestByRange(sites)
                        if(creep.build(closestSite) == ERR_NOT_IN_RANGE){
                            creep.moveTo(closestSite);
                        }
                    }
                    //Repair Containers
                    else if(closeDamagedStructures.length > 0){
                        if(creep.repair(closeDamagedStructures[0]) == ERR_NOT_IN_RANGE){
                            creep.moveTo(closeDamagedStructures[0]);
                        }
                    }
                    //Continue Mining
                    else{
                        if(creep.harvest(sources[creep.memory.eSource]) == ERR_NOT_IN_RANGE){
                            creep.moveTo(sources[creep.memory.eSource]);
                        }
                    }
                }
            }
        }
	}
};

module.exports = unitContainerMiner;
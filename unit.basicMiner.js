var basicMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.spawner == 'Spawn5'){
            creep.memory.eSource = 0;
        }
        let sources = creep.room.find(FIND_SOURCES);
        let closestContainer = sources[creep.memory.eSource].pos.findClosestByRange(_.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "container"));
       
        if(closestContainer && _.filter(creep.room.find(FIND_STRUCTURES), (structure) => structure.structureType == "container").length > 1){
            if(!creep.pos.isEqualTo(closestContainer.pos)){
                creep.moveTo(closestContainer);
            }
            else{
                creep.harvest(sources[creep.memory.eSource])
            }
        }
        else{
            if(creep.harvest(sources[creep.memory.eSource]) == ERR_NOT_IN_RANGE){
                creep.moveTo(sources[creep.memory.eSource]);
            }
        }
	}
};

module.exports = basicMiner;
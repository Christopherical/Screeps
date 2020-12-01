var unitExtractor = {

    /** @param {Creep} creep **/
    run: function(creep, unitFunctions) {
        var minerals = creep.room.find(FIND_MINERALS);
        var storages = _.filter(creep.room.find(FIND_STRUCTURES), (structurez) => structurez.structureType == STRUCTURE_STORAGE);
        
        unitFunctions.fullFlag(creep);
        
        if(!creep.memory.full){
            if(creep.harvest(minerals[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(minerals[0])
            }
        }
        else{
           
            if(creep.transfer(storages[0], RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE){
                creep.moveTo(storages[0])
            }
            if(creep.transfer(storages[0], RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE){
                creep.moveTo(storages[0])
            }
        }
	}
};

module.exports = unitExtractor;
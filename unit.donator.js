var unitDonator = {

    /** @param {Creep} creep **/
    run: function(creep, unitFunctions) {
        unitFunctions.fullFlag(creep);
        if(!creep.memory.full){
            if(Game.getObjectById(creep.memory.withdrawLocation)){
                if(creep.withdraw(Game.getObjectById(creep.memory.withdrawLocation), RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                    creep.moveTo(Game.getObjectById(creep.memory.withdrawLocation))
                }
            }
        }
        else{
            if(Game.getObjectById(creep.memory.depositLocation)){
                if(creep.transfer(Game.getObjectById(creep.memory.depositLocation), RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                    creep.moveTo(Game.getObjectById(creep.memory.depositLocation))
                }
            }
        }
	}
};

module.exports = unitDonator;
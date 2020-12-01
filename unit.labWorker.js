var unitLabWorker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        var ghodiumLabs = _.filter(Game.spawns['Spawn1'].room.find(FIND_STRUCTURES), (structure) => structure.structureType == "lab" && structure.store.getUsedCapacity(RESOURCE_GHODIUM) > 100);
        var terminals = _.filter(Game.spawns['Spawn1'].room.find(FIND_STRUCTURES), (structure) => structure.structureType == "terminal");
        
        var terminals = _.filter(creep.room.find(FIND_STRUCTURES), (structurez) => structurez.structureType == STRUCTURE_TERMINAL);
        if(Game.getObjectById('5e28d25dc155ef2e6e9e4f68')){
            var labUtrium = Game.getObjectById('5e28d25dc155ef2e6e9e4f68')
        }
        if(Game.getObjectById('5e28d17cd8f1f245ae673ebb')){
            var labKeanium = Game.getObjectById('5e28d17cd8f1f245ae673ebb')
        }
        if(Game.getObjectById('5e28f70d84446543ebaf0ffe')){
            var labZynthium = Game.getObjectById('5e28f70d84446543ebaf0ffe')
        }
        if(Game.getObjectById('5e28ac8832c0d366dde4907c')){
            var labLemergium = Game.getObjectById('5e28ac8832c0d366dde4907c')
        }
        if(Game.getObjectById('5e2907bd158dd2308f59c845')){
            var labGhodium = Game.getObjectById('5e2907bd158dd2308f59c845')
        }
        if(false){
            //UTRIUM
            if(labUtrium.store.getFreeCapacity(RESOURCE_UTRIUM) > 300){
                if(creep.store.getUsedCapacity(RESOURCE_UTRIUM) != 300){
                    if(creep.withdraw(terminals[0], RESOURCE_UTRIUM, 300) == ERR_NOT_IN_RANGE){
                        creep.moveTo(terminals[0]);
                    }
                }
                else{
                    if(creep.transfer(labUtrium, RESOURCE_UTRIUM, 300) == ERR_NOT_IN_RANGE){
                        creep.moveTo(labUtrium);
                    }
                }
            }
            //KEANIUM
            else if(labKeanium.store.getFreeCapacity(RESOURCE_KEANIUM) > 300){
                if(creep.store.getUsedCapacity(RESOURCE_KEANIUM) != 300){
                    if(creep.withdraw(terminals[0], RESOURCE_KEANIUM, 300) == ERR_NOT_IN_RANGE){
                        creep.moveTo(terminals[0]);
                    }
                }
                else{
                    if(creep.transfer(labKeanium, RESOURCE_KEANIUM, 300) == ERR_NOT_IN_RANGE){
                        creep.moveTo(labKeanium);
                    }
                }
            }
            //ZYNTHIUM
            else if(labZynthium.store.getFreeCapacity(RESOURCE_ZYNTHIUM) > 300){
                if(creep.store.getUsedCapacity(RESOURCE_ZYNTHIUM) != 300){
                    if(creep.withdraw(terminals[0], RESOURCE_ZYNTHIUM, 300) == ERR_NOT_IN_RANGE){
                        creep.moveTo(terminals[0]);
                    }
                }
                else{
                    if(creep.transfer(labZynthium, RESOURCE_ZYNTHIUM, 300) == ERR_NOT_IN_RANGE){
                        creep.moveTo(labZynthium);
                    }
                }
            }
            //LEMERGIUM
            else if(labLemergium.store.getFreeCapacity(RESOURCE_LEMERGIUM) > 300){
                if(creep.store.getUsedCapacity(RESOURCE_LEMERGIUM) != 300){
                    if(creep.withdraw(terminals[0], RESOURCE_LEMERGIUM, 300) == ERR_NOT_IN_RANGE){
                        creep.moveTo(terminals[0]);
                    }
                }
                else{
                    if(creep.transfer(labLemergium, RESOURCE_LEMERGIUM, 300) == ERR_NOT_IN_RANGE){
                        creep.moveTo(labLemergium);
                    }
                }
            }
        }
        else{
            if(creep.store.getUsedCapacity(RESOURCE_GHODIUM) != 300){
                if(creep.withdraw(ghodiumLabs[0], RESOURCE_GHODIUM, 300) == ERR_NOT_IN_RANGE){
                    creep.moveTo(ghodiumLabs[0])
                }
            }
            else{
                if(creep.transfer(terminals[0], RESOURCE_GHODIUM, 300) == ERR_NOT_IN_RANGE){
                    creep.moveTo(terminals[0])
                }
            }
            
        }
        
        
        
        
       
        
        
	}
};

module.exports = unitLabWorker;
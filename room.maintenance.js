
var roomMaintenance = {

    /** @param {Creep} creep **/
    run: function(spawnArray, terminalLocation) {
        for(x in spawnArray){
            let spawn = spawnArray[x]
            //Get all the structures in the room.
            let structurez = spawn.room.find(FIND_STRUCTURES)
            //Get all the links and towers in the room.
            let links = _.filter(structurez, (structure) => structure.structureType == "link");
            let towers = _.filter(structurez, (structure) => structure.structureType == "tower");
            
            var theTerminal = _.filter(structurez, (structure) => structure.structureType == STRUCTURE_TERMINAL);
            
           
            
            let enemies = spawn.room.find(FIND_HOSTILE_CREEPS);
            let damagedUnits = _.filter(spawn.room.find(FIND_MY_CREEPS), (creepz) => creepz.hits < creepz.hitsMax);
            let damagedStructures = _.filter(structurez, (structure) => structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL && structure.structureType != STRUCTURE_RAMPART)
            
            if(spawn.room.controller.level == 8){
                var damagedWallsRamparts = _.filter(structurez, (structure) => structure.hits < 100000 && (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART))
            }
            else{
                var damagedWallsRamparts = _.filter(structurez, (structure) => structure.hits < 10000 && (structure.structureType == STRUCTURE_WALL || structure.structureType == STRUCTURE_RAMPART))
            }
            if(towers.length > 0){
                if(enemies.length > 0){
                    for(var x in towers){
                        let towerMan = towers[x]
                        towerMan.attack(enemies[0])
                    }
                }
                else if(damagedUnits.length > 0){
                    towers[0].heal(damagedUnits[0])
                }
                else if(damagedStructures.length > 0){
                    towers[0].repair(damagedStructures[0])
                }
                else if(damagedWallsRamparts.length > 0){
                    towers[0].repair(damagedWallsRamparts[0])
                }
            }
            
            if(links.length > 1){
                 for(var i = 0; i < links.length; i++){
                    if(i != 1){
                        if(links[i].cooldown == 0 && links[1].store.getFreeCapacity(RESOURCE_ENERGY) > 150){
                            links[i].transferEnergy(links[1])
                        }
                    }
                }
            }
            //HARD CODED!!!
            // if(spawn.room.controller.level == 8 && Game.getObjectById('5e7a7399370abc68b92b4494').store.getFreeCapacity(RESOURCE_ENERGY) > 5000){
            //     if(theTerminal[0].store.getUsedCapacity(RESOURCE_ENERGY) > 110000){
            //         console.log(spawn.name + " is sending energy and got this response: " + theTerminal[0].send(RESOURCE_ENERGY, 90000, terminalLocation, 'trade contract #1'))
            //     }
            // }
        }
	}
};

module.exports = roomMaintenance;
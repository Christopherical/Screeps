var basicRoom = {

    /** @param {Spawn} spawn **/
    run: function(spawnz, creepz, unitFunctions) {
        for(x in spawnz){
            let spawn = spawnz[x][0];
            let sources = spawnz[x][1];
            let upgraderAmount = spawnz[x][2];
         
            //let terminal = spawn.room.terminal.store.getUsedCapacity(RESOURCE_ENERGY)
            if(_.filter(creepz, {memory : { spawner: spawn.name, unitType: 'standard'}}).length < (1 + sources + upgraderAmount + Math.floor(spawn.room.controller.level / 4)  + Math.ceil(spawn.room.find(FIND_CONSTRUCTION_SITES).length / 100)) == false){
                continue;
            }
            if(!spawn.spawning){
                //Replenisher
                if(_.filter(creepz, {memory : { role :'replenisher', spawner: spawn.name}}).length < 1){
                    console.log('Creating Replenisher for: ' + spawn.name + ". Return code: " + spawn.spawnCreep(unitFunctions.basicPartsGenerator(spawn, [CARRY, CARRY, MOVE], 150, 4, 0), 'Replenisher:' + spawn.name + ":" + Game.time, {memory : { role : 'replenisher', eSource: 0, spawner: spawn.name, unitType : 'standard'}}))
                }
                //Basic Miner
                else if(_.filter(creepz, {memory : { role :'basicMiner', spawner: spawn.name}}).length < sources){
                    console.log('Creating a Basic Miner for: ' + spawn.name + ". Return value: " + spawn.spawnCreep(unitFunctions.basicPartsGenerator(spawn, [WORK], 100, 5, 50), 'basicMiner1:' + spawn.name, {memory : { role : 'basicMiner', eSource: 0, spawner: spawn.name, unitType : 'standard'}}) + ".")
                    console.log('Creating a Basic Miner for: ' + spawn.name + ". Return value: " + spawn.spawnCreep(unitFunctions.basicPartsGenerator(spawn, [WORK], 100, 5, 50), 'basicMiner2:' + spawn.name, {memory : { role : 'basicMiner', eSource: 1, spawner: spawn.name, unitType : 'standard'}}) + ".")
                }
                //Janitor
                else if(_.filter(creepz, {memory : { role :'janitor', spawner: spawn.name}}).length < 1 && spawn.room.storage){
                    if(spawn.name == 'Spawn7'){
                        console.log('Creating a Janitor for: ' + spawn.name + ". Return code: " + spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'Janitor:' + spawn.name + ":" + Game.time, {memory : { role : 'janitor', spawner: spawn.name, unitType : 'standard'}}) + ".")

                    }
                    else{
                        console.log('Creating a Janitor for: ' + spawn.name + ". Return code: " + spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'Janitor:' + spawn.name + ":" + Game.time, {memory : { role : 'janitor', spawner: spawn.name, unitType : 'standard'}}) + ".")
                    }
                }
                //Upgrader
                else if(_.filter(creepz, {memory : { role :'upgrader', spawner: spawn.name}}).length < upgraderAmount){
                    if(spawn.room.controller.level != 8){
                        console.log('Creating a Upgrader for: ' + spawn.name + ". Return value: " + spawn.spawnCreep(unitFunctions.basicPartsGenerator(spawn, [WORK, WORK, CARRY, MOVE], 300, 12, 0), 'Upgrader:' + spawn.name + ":" + Game.time, {memory : { role : 'upgrader', spawner: spawn.name, unitType : 'standard'}}) + ".")
                    }
                    console.log('Creating a Upgrader for: ' + spawn.name + ". Return value: " + spawn.spawnCreep([CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'Upgrader:' + spawn.name + ":" + Game.time, {memory : { role : 'upgrader', spawner: spawn.name, unitType : 'standard'}}) + ".")
                }
                //Basic Worker
                else if(_.filter(creepz, {memory : { role :'basicWorker', spawner: spawn.name}}).length < 1 && spawn.room.find(FIND_CONSTRUCTION_SITES).length > 0){
                    console.log('Creating a Basic Worker for: ' + spawn.name + ". Return value: " + spawn.spawnCreep(unitFunctions.basicPartsGenerator(spawn, [WORK, CARRY, MOVE], 200, 7, 0), 'basicWorker:' + spawn.name + ":" + Game.time, {memory : { role : 'basicWorker', eSource: 0, spawner: spawn.name, unitType : 'standard'}}) + ".")
                }
            }
        }
    }
}

module.exports = basicRoom;
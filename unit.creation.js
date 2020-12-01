var unitCreation = {

    /** @param {Spawn} spawn **/
    run: function(spawns, creepz) {
        for(x in spawns){
            let spawn = spawns[x][0]
            let unitCount = spawns[x][1]
            if(spawn.name == 'Spawn1' && _.filter(creepz, {memory : { unitType:'intrepid', spawner: spawn.name}}).length < unitCount){
                if(!spawn.spawning){
                    //Conqueror
                    if(_.filter(creepz, {memory : { role :'conqueror', spawner: 'Spawn1'}}).length < 1){
                        console.log('Creating Conqueror for Room 1')
                        Game.spawns['Spawn1'].spawnCreep([ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'Conqueror1', { memory : { role : 'conqueror', spawner: spawn.name, unitType : 'intrepid'}}) 
                        
                    }
                    //ContainerMiner
                    else if(_.filter(creepz,{memory : { role :'containerMiner', spawner: 'Spawn1'}}).length < 3){
                        console.log('Creating Container Miner for Room 1')
                        if(spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, CARRY], 'ContainerMiner1R1', {memory : { role : 'containerMiner', eSource : 0, spawner: spawn.name, unitType : 'intrepid', xLocation: 0, yLocation: 29}}) == ERR_NAME_EXISTS){
                            if(spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, CARRY], 'ContainerMiner2R1', {memory : { role : 'containerMiner', eSource : 1, spawner: spawn.name, unitType : 'intrepid', xLocation: 0, yLocation: 29}}) == ERR_NAME_EXISTS){
                                spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, CARRY], 'ContainerMiner3R1', {memory : { role : 'containerMiner', spawner: spawn.name, unitType : 'intrepid', eSource: 0, xLocation: 28, yLocation: 0}});
                            }
                        }
                    }
                    //Claimer
                    else if(_.filter(creepz,{memory : { role : 'claimer', spawner: 'Spawn1'}}).length < 2){
                        console.log('Creating Claimer for Room 1')
                        spawn.spawnCreep([MOVE, MOVE, CLAIM, CLAIM], 'ClaimerTop', {memory : { role : 'claimer', spawner: spawn.name, unitType : 'intrepid', xLocation: 25, yLocation: 0 }})
                        spawn.spawnCreep([CLAIM, CLAIM, MOVE, MOVE], 'ClaimerLeft', {memory : { role : 'claimer', spawner: spawn.name, unitType : 'intrepid', xLocation: 0, yLocation: 29}})
                    }    
                    //COLLECTORS
                    else if(_.filter(creepz,{memory : { role : 'collector', spawner: 'Spawn1'}}).length < 2){
                        console.log('Creating Collector for Room 1')
                        spawn.spawnCreep([WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'Collector1R1',
                        {memory : { role : 'collector', spawner: spawn.name, unitType : 'intrepid', xLocation: 28, yLocation: 0, returnX: 28 , returnY: 49}});
                        spawn.spawnCreep([WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'Collector2R1',
                        {memory : { role : 'collector', spawner: spawn.name, unitType : 'intrepid', xLocation: 0, yLocation: 29, returnX: 49 , returnY: 29}});
                    }
                    //DONATORS
                    // else if(_.filter(creepz,{memory : { role : 'donator', spawner: 'Spawn1'}}).length < 1){
                    //     spawn.spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE],
                    //     'Donatah1', {memory : { role : 'donator', spawner: spawn.name, unitType : 'intrepid', withdrawLocation: '5e0f53e8f5b2d6df68322ded', depositLocation: '5e28358293430738f95a6bf1'}})
                    // }
                }
                
            }
            else if(spawn.name == 'Spawn5' && _.filter(creepz, {memory : { unitType:'intrepid', spawner: spawn.name}}).length < unitCount){
                if(!spawn.spawning){
                    // //Claimer
                    if(_.filter(creepz,{memory : { role : 'claimer', spawner: 'Spawn5'}}).length < 1){
                        console.log('Creating Claimer for Room 5')
                        spawn.spawnCreep([MOVE, MOVE, CLAIM, CLAIM], 'Claimer1R5', {memory : { role : 'claimer', spawner: spawn.name, unitType : 'intrepid', xLocation: 49, yLocation: 36 }})
                    }   
                    //ContainerMiner
                    else if(_.filter(creepz,{memory : { role :'containerMiner', spawner: 'Spawn5'}}).length < 2){
                        console.log('Creating Container Miner for Room 5')
                        spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, CARRY], 'ContainerMiner1R5', {memory : { role : 'containerMiner', eSource : 0, spawner: spawn.name, unitType : 'intrepid', xLocation: 49, yLocation: 36}})
                        spawn.spawnCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, CARRY], 'ContainerMiner2R5', {memory : { role : 'containerMiner', eSource : 1, spawner: spawn.name, unitType : 'intrepid', xLocation: 49, yLocation: 36}})
                    }
                    // //COLLECTORS
                    else if(_.filter(creepz,{memory : { role : 'collector', spawner: 'Spawn5'}}).length < 1){
                        console.log('Creating Collector for Room 5')
                        spawn.spawnCreep([WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,  MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], 'Collector1R5',
                        {memory : { role : 'collector', spawner: spawn.name, unitType : 'intrepid', xLocation: 49, yLocation: 36, returnX: 0 , returnY: 36}});
                        
                    }
                }
                
            }
            for(var i in Memory.creeps) {
                    if(!Game.creeps[i]) {
                        delete Memory.creeps[i];
                    }
                }
        }
        
        
        
       
    }
}

module.exports = unitCreation;
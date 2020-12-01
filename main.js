// var unitHealer = require('unit.healer');
//var unitLabWorker = require('unit.labWorker');
// var unitExtractor = require('unit.extractor');

// var unitDonator = require('unit.donator');
var unitCreation = require('unit.creation');
var roomMaintenance = require('room.maintenance');
var basicRoom = require('room.basicRoom');
var unitJanitor = require('unit.janitor');
var unitClaimer = require('unit.claimer');
var unitReplenisher = require('unit.replenisher');
var unitUpgrader = require('unit.upgrader');
var basicMiner = require('unit.basicMiner');
var basicWorker = require('unit.basicWorker');
var unitConqueror = require('unit.conqueror');
var unitContainerMiner = require('unit.containerMiner');
var unitCollector = require('unit.collector');
var unitFunctions = require('unit.functions');

module.exports.loop = function () {
    var gameCreeps = Game.creeps
    
    console.log(15 / 10)

    basicRoom.run([[Game.spawns['Spawn1'], 2, 1],[Game.spawns['Spawn2'], 2, 1],[Game.spawns['Spawn3'], 2, 1],[Game.spawns['Spawn4'], 2, 1],
    [Game.spawns['Spawn5'], 1, 1], [Game.spawns['Spawn6'], 2, 1], [Game.spawns['Spawn7'], 2, 1], [Game.spawns['Spawn8'], 2, 1]], gameCreeps, unitFunctions)
    
    roomMaintenance.run([Game.spawns['Spawn1'], Game.spawns['Spawn2'], Game.spawns['Spawn3'], Game.spawns['Spawn4'], Game.spawns['Spawn5'], Game.spawns['Spawn6'], Game.spawns['Spawn7'], Game.spawns['Spawn8']], "W22S31")
    unitCreation.run([[Game.spawns['Spawn1'], 8], [Game.spawns['Spawn5'], 4]], gameCreeps);
  
    
    for(var y in gameCreeps){
        var unit = gameCreeps[y];
        if(unit.memory.role == 'claimer'){
          unitClaimer.run(unit);
        }
        else if(unit.memory.role == 'conqueror'){
          unitConqueror.run(unit);
        }
        else if(unit.memory.role == 'collector'){
          unitCollector.run(unit, unitFunctions);
        }
        else if(unit.memory.role == 'containerMiner'){
          unitContainerMiner.run(unit, unitFunctions);
        }
        else if(unit.memory.role == 'janitor'){
           unitJanitor.run(unit, unitFunctions);
        }
        else if(unit.memory.role == 'replenisher'){
           unitReplenisher.run(unit, unitFunctions);
        }
        else if(unit.memory.role == 'upgrader'){
           unitUpgrader.run(unit, unitFunctions);
        }
        else if(unit.memory.role == 'basicMiner'){
          basicMiner.run(unit);
        }
        else if(unit.memory.role == 'basicWorker'){
          basicWorker.run(unit, unitFunctions);
        }
        
        // else if(unit.memory.role == 'donator'){
        //   unitDonator.run(unit, unitFunctions);
        // }
        // else if(unit.memory.role == 'extractor'){
        //   unitExtractor.run(unit, unitFunctions);
        // }
        // else if(unit.memory.role == 'healer'){
        //   unitHealer.run(unit);
        // }
        // else if(unit.memory.role == 'labWorker'){
        //   unitLabWorker.run(unit);
        // }
    }
}


const Park = function (name, ticketPrice) {
  this.name = name
  this.ticketPrice = ticketPrice
  this.collection = []
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.collection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {


  this.collection.pop(dinosaur);
};

Park.prototype.findDinoBySpecies = function (species) {

  return this.collection.filter(dino => dino.species === species)
}

Park.prototype.mostPopularDino = function(){

  return this.collection.reduce((mostPopularDino, nextDino) =>
    nextDino.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay ? nextDino : mostPopularDino
  )

// Park.prototype.deleteBySpecies = function(species){
//   dino = this.collection.filter(dino => dinosaur.species === species)
//   Dinosaur.clear()
// }

}

module.exports = Park




// let mostPopularDino;
//
// this.collection.forEach(dino => {
//
//   if (mostPopularDino && dino.guestsAttractedPerDay > mostPopularDino.guestsAttractedPerDay) {
//
//     mostPopularDino = dino;
//   } else if (!mostPopularDino) {
//
//     mostPopularDino = dino;
//   }
// })
//
// return mostPopularDino;

// let dinoMap = new Map(this.collection.map(dinosaur => [dinosaur.guestsAttractedPerDay, dinosaur]));
// let mostPopularNumber = Math.max.apply(Math, this.collection.map(dinosaur => dinosaur.guestsAttractedPerDay));
//
// return dinoMap.get(mostPopularNumber)

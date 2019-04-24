const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur

  beforeEach(function () {
    park = new Park('Jurassic', 10);
    dinosaur = new Dinosaur('T-REX', 'carnivore', 50)
    dinosaur2 = new Dinosaur('test1', 'carnivore', 100)
    dinosaur3 = new Dinosaur('test2', 'herbivore', 70)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur)
    const actual = park.collection;
    assert.deepStrictEqual(park.collection, [dinosaur])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur)
    const actual = park.collection;
    assert.deepStrictEqual(park.collection, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)

    let actual = park.mostPopularDino()

    assert.deepStrictEqual(dinosaur2, actual)
  });

  it('should be able to find all dinosaurs of a particular species', function() {

    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)

    let actual = park.findDinoBySpecies("T-REX");

    assert.deepStrictEqual(1, actual.length)
  });

  it('should be able to remove all dinosaurs of a particular species');
  //
  //   dinosaur = new Dinosaur('T-REX', 'carnivore', 50)
  //   dinosaur2 = new Dinosaur('test1', 'carnivore', 100)
  //   dinosaur3 = new Dinosaur('test2', 'herbivore', 70)
  //
  // let actual = park.deleteBySpecies("T-REX");
  // assert.deepStrictEqual(2, actual.length)
  //

  it('should be able to calculate total no of visitors per day', function(){
      park.addDinosaur(dinosaur);
      park.addDinosaur(dinosaur2);
      const expected = 150;
      assert.strictEqual(park.calculateVisitorsTotal(), expected);
  });

  it('should be able to calculate total number of visitors per year');

  it('should be able to calculate total revenue from ticket sales per year')

});

const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let littlefoot;
  let cera;
  let sharptooth;
  let dinosaurList;
  beforeEach(function () {
    littlefoot = new Dinosaur('Longneck', 'herbivore', 10);
    cera = new Dinosaur('Triceratops', 'herbivore', 9);
    sharptooth = new Dinosaur('T-Rex', 'carnivore', 20);
    dinosaurList = [littlefoot, cera, sharptooth];
    park = new Park('Jurassic Park', 10, dinosaurList);

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [littlefoot, cera, sharptooth] )
  });

  it('should be able to add a dinosaur to its collection', function(){
    let petrie = new Dinosaur("Terodactyl", 'Carnivore', 2);
    park.addDinosaur(petrie);
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [littlefoot, cera, sharptooth, petrie]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(cera);
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [littlefoot, sharptooth]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopular();
    assert.strictEqual(actual, sharptooth);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    let littlefootsMother = new Dinosaur('Longneck', 'herbivore', 4)
    park.addDinosaur(littlefootsMother)
    const actual = park.findBySpecies('Longneck');
    assert.deepEqual(actual, [littlefoot, littlefootsMother])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.visitorsToday();
    assert.strictEqual(actual, 39);
  });

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});

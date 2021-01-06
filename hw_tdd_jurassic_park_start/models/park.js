const Park = function(name, price, dinosaurs){
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    for ( i=0; i<this.dinosaurs.length; i++){
        if (this.dinosaurs[i] === dinosaur){
            this.dinosaurs.splice(i,1)
        }
    }
} 

Park.prototype.mostPopular = function(){
    let currentHighest = 0
    let result;
    for ( i=0; i<this.dinosaurs.length; i++){
        if (this.dinosaurs[i].guestsAttractedPerDay > currentHighest){
                result = this.dinosaurs[i];
                currentHighest = result.guestsAttractedPerDay;
        }
    }
    return result
}

Park.prototype.findBySpecies = function(species){
    let result = [];
    for( i=0; i<this.dinosaurs.length; i++){
        if ( this.dinosaurs[i].species === species){
            result.push(this.dinosaurs[i]);
        }
    }
    return result
}


module.exports = Park;
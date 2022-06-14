function houseBlueprint(address, description, size, owner) {
    this.address = address;
    this.date = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
    this._averageBuildSpeed = 0.5;

   this.getDaysToBuild = () =>{
       return this.size / this._averageBuildSpeed;
   }
}


function HouseBuilder(adress, description, owner, size, roomCount){
    houseBlueprint.call(this, adress, description, size, owner);
    this.roomCount = roomCount;
}


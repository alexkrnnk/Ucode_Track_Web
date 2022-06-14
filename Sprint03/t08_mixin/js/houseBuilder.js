'use strict'

function HouseBuilder (address, description, owner, size, roomCount) {

    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this.date = new Date();
    this.__proto__ = houseBlueprint;
}

const houseBlueprint = {
    address: null,
    date: null,
    description: null,
    _building_speed: 0.5,
    owner: null,
    size: null,
    getDaysToBuild: function () {
      return this.size / this._building_speed;
    },
  };

  
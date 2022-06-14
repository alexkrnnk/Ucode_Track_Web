class Tower extends Building{
    constructor(floors, material, adress, hasElevator, arcCapacity, height) {
        super(floors, material, adress);
        this.hasElevator= hasElevator; 
        this.arcCapacity = arcCapacity;
        this.height = height;
    }

    isElevator(hasElevator) {
        if (hasElevator == true) {
            hasElevator = "+";
        }
        else {
            hasElevator = "-";
        }
        return hasElevator;
    }

    FloorHeigth(){
        return this.height / this.floors;
    }

    toString() {
        return [
            super.toString(),
            `Elevator: ${this.isElevator(this.hasElevator)}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.FloorHeigth()}`,
        ].join('\n');
    }

};


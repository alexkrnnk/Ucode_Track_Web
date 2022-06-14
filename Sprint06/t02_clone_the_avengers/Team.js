const {Avenger} = require("./Avenger")

module.exports.Team = class Team
{
    constructor(id, avengers)
    {
        this.avengers = avengers;
        this.id = id;
    }
    battle(damage)
    {
        for (let avenger of this.avengers)
        {
            avenger.hp -= damage.damage;
        }
    }

    calculateLosses(clonedTeam)
    {
        let count = 0;
        clonedTeam.forEach(avenger => {
            if(avenger.hp <= 0)
            {
                count += 1;
            }
        })
        
        if (count === 0)
            console.log('We haven\'t lost anyone in this battle!');
        else
            console.log('In this battle we lost ' + count + ' Avengers');
    }
    
    clone() {
        let arr = []
        this.avengers.forEach(element => {
            let aven = Object.assign({}, element)
            Object.setPrototypeOf(aven, Object.getPrototypeOf(element))
            arr.push(aven)
        })
        this.avengers = arr;

        return this.avengers = arr;
    }
}
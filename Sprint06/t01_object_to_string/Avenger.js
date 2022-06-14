class anonymous extends Function
{
    constructor()
    {
        super('...args', 'return this.self.call(...args)');
        return this.self = this.bind(this);
    }
}

module.exports.Avenger = class Avenger extends anonymous
{
    constructor({ name, alias, gender, age, powers })
    {
        super();
        this.name_of_hero = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
    }

    toString()
    {
        return `name: ${this.name_of_hero}
gender: ${this.gender}
age: ${this.age}`;
    }

    call()
    {
        return `${this.alias.toUpperCase()}
${this.powers.join('\n')}`;
    }
}
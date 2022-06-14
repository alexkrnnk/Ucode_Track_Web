let {Product} = require('./product')
let EatException = require('./eat-exception')

module.exports.Ingestion = class Ingestion
{
    products = [];
    day_of_diet = 0;
    constructor(meal_type, id)
    {
        this.id = id;
        this.meal_type = meal_type;
    }

    setProduct(product)
    {
        this.products.push(product)
    }

    getProductInfo(product)
    {
        let result = {};
        for (let p of this.products) 
        {
            if (p.aname === product) 
            {
                result.kcal = p.kcal_per_portion
                return result
            }
        }
    }

    getFromFridge(product) 
    {
        for (let p of this.products)
        {
            if (p.aname === product) 
            {
                try 
                {
                    p.check()
                } 
                catch (e) 
                {
                    let mes = `To many calories in ${product} for ${this.meal_type}`;
                    e.message = mes;z
                    throw e
                }
            }
        }
    }
}
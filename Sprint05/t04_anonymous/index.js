module.exports.getAnonymous = function (name, alias, affiliation){
   const Anonymous = class {
    constructor(name, alias, affiliation){
      this.name = name;
      this.alias = alias;
      this.affiliation = affiliation;
    }
  }
  return new Anonymous(name, alias, affiliation);
}


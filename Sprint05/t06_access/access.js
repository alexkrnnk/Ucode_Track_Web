module.exports = class Access{
  constructor(){
    if(this.mark_LXXXV === 'undefined'){
      return 'undefined';
    }
    else if(this.mark_LXXXV === 'null'){
      return 'null';
    }
    else{
      return this.mark_LXXXV;
    }
  }
}
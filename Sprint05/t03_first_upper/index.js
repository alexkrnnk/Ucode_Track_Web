
module.exports.firstUpper = function(string){
  if (string) {
    string = string.trim();
    string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  if (string == null) {
    return "";
  }
  
  return string;
}



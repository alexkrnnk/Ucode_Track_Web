let validator = {
    set(obj, prop, value) {
      if (prop === 'age') {
          
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        else{
            console.log("Setting value '100' to 'age'")
            console.log("Trying to access the property 'age'...")
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }
      // The default behavior to store the value
      obj[prop] = value;
  
      // Indicate success
      return true;
    }
};


let animal, gender, age, description;

while(animal == null){
    animal = prompt('What animal is the superhero most similar to?', '');
    
    let regex = /^[a-zA-Z]+$/;

    if(animal.length > 20 || !animal.match(regex) || animal.includes(' ')){
        alert("ERROR: Words are accepted only no more than 20 characters and only from letters!");
        animal = null;
    }
    else{
        alert(`Animal name is ${animal}`)
        break;
    }
    
}

while(gender == null){
    gender = prompt('Is the superhero male or female? Leave blank if unknown or other.', '');

    let reqGender = RegExp('^male$|^female$|^$', 'i')

    if(!reqGender.test(gender)){
        alert("ERROR: You can only write male or female!");
        gender = null;
    }
    else{
        alert(`Gender is ${gender}`);
        break;
    }
    
}

while(age == null){
    age = prompt('How old is the superhero?', '');

    if(age.length > 5 || !age.startsWith(age)){
        alert("ERROR: Age cannot be 5 digits and cannot be more than zero!");
        age = null;
    }
    else{
        alert(`Age is ${age}`);
        break;
    }
    
}

if (RegExp('^male$', 'i').test(gender) && age < 18) {
    description = "boy";
}
else if (RegExp('^male$', 'i').test(gender) && age >= 18) {
    description = "man";
}
else if (RegExp('^female$', 'i').test(gender) && age < 18) {
    description = "girl";
}
else if (RegExp('^female$', 'i').test(gender) && age >= 18) {
    description = "woman";
}
else if (RegExp('^$').test(gender) && age < 18) {
    description = "kid";
}
else if (RegExp('^$').test(gender) && age >= 18) {
    description = "hero";
}

alert("The superhero name is: " + animal + '-' + description);



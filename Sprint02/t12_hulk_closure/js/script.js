function concat(...args) {
    getPrompt.count = 0;

    function getPrompt() {
        let sword = prompt("Enter string: ", "");
        if (sword === null)
            return args[0];

        getPrompt.count++;
        
        return args[0].concat(" ", sword);
    }

    if (arguments.length == 1)
        return getPrompt;
        
    else if (arguments.length == 2) 
        return args[0].concat(" ", args[1]);
}


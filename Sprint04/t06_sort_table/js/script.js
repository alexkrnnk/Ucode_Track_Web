let Tabledata = [
    { name: `Black Panther`, strength: 66, age: 53 },
    { name: `Captain America`, strength: 79, age: 137 },
    { name: `Captain Marvel`, strength: 97, age: 26 },
    { name: `Hulk`, strength: 80, age: 49 },
    { name: `Iron Man`, strength: 88, age: 48 },
    { name: `Spider-Man`, strength: 78, age: 16 },
    { name: `Thanos`, strength: 99, age: 1000 },
    { name: `Thor`, strength: 95, age: 1000 },
    { name: `Yon-Rogg`, strength: 73, age: 52 }
]
let sorting = {
    sortbyName: false,
    sortbyStrength: false,
    sortbyAge: false
}
let notification = document.querySelector('#notification')
notification.innerHTML = "Sorting by Name, order: ASC"

function createTable()
{
    let placeholder = document.getElementById("placeholder");
    let table = document.createElement("table");
    let head = ["Name", "Strength", "Age"];
    let header = document.createElement("tr");
    for (let i = 0; i < 3; i++)
    {
        let item = document.createElement("th");
        item.innerText = head[i];
        if (i == 0)
        {
            item.setAttribute("onclick", "sortbyName()");
        }
        else if (i == 1)
        {
            item.setAttribute("onclick", "sortbyStrength()");
        }
        else
        {
            item.setAttribute("onclick", "sortbyAge()");
        }
        header.appendChild(item);
    }
    table.appendChild(header);

    for (let i = 0; i < 9; i++)
    {
        let row = document.createElement("tr");

        let item = document.createElement("td");
        item.innerText = Tabledata[i].name;
        row.appendChild(item);

        item = document.createElement("td");
        item.innerText = Tabledata[i].strength;
        row.appendChild(item);

        item = document.createElement("td");
        item.innerText = Tabledata[i].age;
        row.appendChild(item);

        table.appendChild(row);
    }
    placeholder.innerHTML = "";
    placeholder.appendChild(table);
}

function sortbyName()
{
    if (sorting.sortbyName == false)
    {
        Tabledata.sort((a, b) =>
        {
            if(a.name > b.name)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        });
        sorting.sortbyName = true;
        sorting.sortbyStrength = false;
        sorting.sortbyAge = false;
        notification.innerHTML = "Sorting by Name, order: ASC";
    }
    else
    {
        Tabledata.sort((a, b) =>
        {
            if(a.name < b.name)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        });
        sorting.sortbyName = false;
        sorting.sortbyStrength = false;
        sorting.sortbyAge = false;
        notification.innerHTML = "Sorting by Name, order: DESC";
    }
    createTable(Tabledata);
}

function sortbyStrength()
{
    if (sorting.sortbyStrength == false)
    {
        Tabledata.sort((a, b) =>
        {
            if(a.strength > b.strength)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        });
        sorting.sortbyName = false;
        sorting.sortbyStrength = true;
        sorting.sortbyAge = false;
        notification.innerHTML = "Sorting by Strength, order: ASC";
    }
    else
    {
        Tabledata.sort((a, b) =>
        {
            if(a.strength < b.strength)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        });
        sorting.sortbyName = false;
        sorting.sortbyStrength = false;
        sorting.sortbyAge = false;
        notification.innerHTML = "Sorting by Strength, order: DESC";
    }
    createTable(Tabledata)
}

function sortbyAge()
{
    if (sorting.sortbyAge == false)
    {
        Tabledata.sort((a, b) =>
        {
            if(a.age > b.age)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        });
        sorting.sortbyName = false;
        sorting.sortbyStrength = false;
        sorting.sortbyAge = true;
        notification.innerHTML = "Sorting by Age, order: ASC";
    }
    else
    {
        Tabledata.sort((a, b) =>
        {
            if(a.age < b.age)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        });
        sorting.sortbyName = false;
        sorting.sortbyStrength = false;
        sorting.sortbyAge = false;
        notification.innerHTML = "Sorting by Age, order: DESC";
    }
    createTable()
}

createTable();


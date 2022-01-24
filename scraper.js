
let a = document.getElementsByTagName('img');

let category = document.getElementsByTagName('input')[0].value;

var family, extension;

let name = ""
let sourceUrl = ""

var array = [];
var icons = [];
var names = [];

for(let x = 0; x < a.length; x++){
    array.push(a[x].srcset);
}

for(let y = 0; y < array.length; y++){
    var splits
    if(array[y] !== ""){

        splits = array[y].split('/')

        if(!family){
            family = splits[3]
        }
        if(!extension){
            extension = splits.slice(-1)[0].split('.')[1].split(' ')[0]
        }
        
        icons.push(splits.slice(-1)[0].split('.')[0]);
    }   
    
}

var jsonSet = {
    "icons": [
        {
            "name": `Icons8 ${category} - ${family}`,
            "sourceUrl": `https://img.icons8.com/${family}/280/000000/`,
            "source": icons,
            "extension": extension
        }
    ]
}

var smallSet = 
    {
        "name": `Icons8 ${category} - ${family}`,
        "sourceUrl": `https://img.icons8.com/${family}/280/000000/`,
        "source": icons,
        "extension": extension
    }


console.log(jsonSet)
console.log(smallSet)


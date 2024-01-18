const obj = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656105600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656134400000,
        price: 30,
        category: 'Food',
        itemName: 'Sushi',
    },
];
function exp(obj){
    for(var i=0;i<obj.length;i++){
        if(obj[i].category==="Food"){
        console.log(obj[i].itemName);
        }
}}

console.log(exp(obj));
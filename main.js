/* function Human(){
    //this = {}
    //prototype = {}
    this.name='Danilo'
    

}

Human.prototype.info = function(){
    console.log(this.name);
    
}

let h1 = new Human()

h1.info()
 */

/* {} = new Object()
[] = new Array()
function info(){} = new Function()
'Danilo' = new String() */


/* let names = new Array('Danilo','Milica','Marko')
console.log(names);
 */

/* class Human{
    car = 'Volvo'
    constructor(name){
        this.name=name
    }
    info(){

    }
    
}

let h1 = new Human('Danilo')
console.log(h1); */

/* class Account {
    deposit;
    numOfAccounts = 0
    constructor(dep){
        this.deposit = dep;
        this.numOfAccounts++;
    }
}

let a1 = new Account(11000)
let a2 = new Account(22000)

console.log(a1); */

/* class DBConnect{
    static numOfAccount = 0;
    constructor(){
        this.name = 'Danilo';
        DBConnect.numOfAccount++;
    }
}

let h1 = new DBConnect()
let h2 = new DBConnect()
let h3 = new DBConnect()
console.log(DBConnect.numOfAccount);
 */

let xml = new XMLHttpRequest();


xml.open('GET','raw.githubusercontent.com/Danilovesovic/pitanja/main/data.json');

xml.send();


setTimeout(() => {
    console.log(xml.responseText);
}, 3000);



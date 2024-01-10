cookie = {
    name: "chocolate cookie",
    isGlutenFree: false,
    eatCookie: function() {
        console.log("I am eating "+cookie.name);
    }
};
cookie.isGlutenFree = true;
console.log(cookie);
console.log(cookie.eatCookie());
//console.log(cookie.name);
//console.log(cookie.isGlutenFree);

class Cookie{
    constructor(name, isGlutenFree){
        this.name = name,
        this.isGlutenFree = isGlutenFree
    }

    eatCookie(){
        console.log("I am eating "+this.name);
    }

}
const myCookie = new Cookie("iced oatmeal", false);


console.log(myCookie.eatCookie());
//console.log(myCookie.name);
//console.log(myCookie["name"]);

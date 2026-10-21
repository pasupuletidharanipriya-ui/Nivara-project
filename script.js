var per = {}
Object.defineProperties(per,{
    'firstname' : {
        configurable: true,
        get : function () {
            return this._firstname;
        },
        set : function(value){
            this._firstname=value;
        },
    },
    'lastname' :{
        value : 'priya'
    },
});
console.log(per);
per.firstname='dhanvik';
console.log(per);
console.log(per.firstname,per._firstname);
console.log(Object.getOwnPropertyDescriptors(per));
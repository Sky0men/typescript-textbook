"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Вася');
class Admin {
}
const admin = new Admin();
admin.role = 1;
console.log(admin);

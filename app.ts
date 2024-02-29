class User {
    name: string;
    age: number;

    constructor()
    constructor(age: number)
    constructor(name: string)
    constructor(nameOrAge?:string | number) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        } else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }
    }
}

const user = new User('Вася');
const user1 = new User(22);

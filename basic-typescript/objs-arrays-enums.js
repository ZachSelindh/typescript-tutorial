"use strict";
/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "Zach",
    age: 30,
    hobbies: ['Coding', 'Guitar'],
    role: [2, 'author']
}; */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["READ_ONLY"] = 101] = "READ_ONLY";
    Role[Role["AUTHOR"] = 102] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Zach",
    age: 30,
    hobbies: ['Coding', 'Guitar'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("Is Admin: ", person.role);
}

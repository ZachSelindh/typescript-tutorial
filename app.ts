const person = {
    name: "Zach",
    age: 30,
    hobbies: ['Coding', 'Guitar']
};

let favoriteActivities: string[];
favoriteActivities = ['sports']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
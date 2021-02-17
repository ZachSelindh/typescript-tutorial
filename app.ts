const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "Zach",
    age: 30,
    hobbies: ['Coding', 'Guitar'],
    role: [2, 'author']
};

person.role.push('admin')
/* person.role[1] = 10; */

let favoriteActivities: string[];
favoriteActivities = ['sports']

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user[0]));

//Alternative Solution
function greeter(person: string[]): string {
    return "Hello, " + person.join(', ');
  }
  
  let user2 = ["Jane User", "John Smith"];
  
  console.log(greeter(user2));
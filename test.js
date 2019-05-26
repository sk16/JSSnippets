let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: Object.create(hamster)
};

let lazy = {
  __proto__: Object.create(hamster)
};

// This one found the food
speedy.eat("applsse");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple
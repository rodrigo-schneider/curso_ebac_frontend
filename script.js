// Classe abstrata
class Animal {
    constructor(name) {
      if (this.constructor === Animal) {
        throw new Error("Cannot instantiate abstract class");
      }
      this.name = name;
    }
  
    // Método abstrato
    makeSound() {
      throw new Error("Abstract method not implemented");
    }
  }
  
  // Classes que herdam de Animal
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      return `${this.name} says Woof!`;
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    makeSound() {
      return `${this.name} says Meow!`;
    }
  }
  
  // Criando instâncias de objetos
  const dog1 = new Dog("Buddy");
  const cat1 = new Cat("Whiskers");
  const dog2 = new Dog("Max");
  
  console.log(dog1.makeSound()); // Saída: Buddy says Woof!
  console.log(cat1.makeSound()); // Saída: Whiskers says Meow!
  console.log(dog2.makeSound()); // Saída: Max says Woof!
  
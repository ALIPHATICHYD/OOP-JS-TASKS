//OOP TASK 1
class Animal {
        constructor(name, birthType, color){
            this.name = name
            this.birthType = birthType
            this.color = color
        }
    }

class Mammal extends Animal{
        constructor(name, birthType, color){
            super(name, birthType, color)
        }
        static sound() {
            return 'moo'
        }
    }

const cow = new Mammal('COW', 'MAMMAL', 'WHITE');
   console.log(cow);
   console.log(Mammal.sound());

//OOP TASK 2
 class GeneralCharacters{
        constructor(name, color, xplevel){
            this.name = name
            this.color = color
            this. xplevel = xplevel
        }
    }


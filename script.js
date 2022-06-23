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

 class Goblin extends GeneralCharacters{
        constructor(name, color, xplevel){
            super(name, color, xplevel)
            
 console.log(goblin);
    console.log(Goblin.action());

        }
         static action() {
            return 'steal';
        }
    }

  class Wizard extends GeneralCharacters{
        constructor(name, color, xplevel){
             super(name, color, xplevel)
            }
               static action() {
                return 'magic'
            }
        }      

 class Elf extends GeneralCharacters{
         constructor(name, color, xplevel){
             super(name, color, xplevel)
                }
                  static action() {
                    return 'annoy'
                }
                
   const goblin = new Goblin('Goblin', 'green', '51')
    const wizard = new Wizard('Wizard', 'brown', '150')
    const elf = new Elf('Elf', 'LightBrown', '89')


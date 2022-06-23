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


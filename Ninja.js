class Ninja {
    constructor (ninjaName, ninjaHealth){
        this.name = ninjaName
        this.health = ninjaHealth
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(`This ninja's name is ${this.name}`)
        return this;
    }
    showStats(){
        console.log(`${this.name}'s health is ${this.health}, speed is ${this.speed}, and strength is ${this.strength}`)
        return this;
    }
    drinkSake(){
        this.health += 10
        return this;
    }
    
}

const ninja1 = new Ninja("Silas", 100)

ninja1.drinkSake()
ninja1.showStats()

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log(`${this.name}, I have a very wise message for you...`)
    }
}

const sensei1 = new Sensei("Ila", 200)

sensei1.speakWisdom()
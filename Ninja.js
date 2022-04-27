class Ninja {
    constructor (ninjaName, ninjaHealth){
        this.name = ninjaName
        this.health = ninjaHealth
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(`This ninja's name is ${this.name}`)
    }
    showStats(){
        console.log(`${this.name}'s health is ${this.health}, speed is ${this.speed}, and strength is ${this.strength}`)
    }
    drinkSake(){
        this.health += 10
    }
    
}

const ninja1 = new Ninja("Silas", 100)

ninja1.drinkSake()
ninja1.showStats()
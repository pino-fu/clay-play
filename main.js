const buyClay = () => {
    const blankObj = {}
    return blankObj
}
const clayBought = buyClay()



const makePottery = (obj) => {
    obj.shape = "Bowl"
    return obj
}
const potteryMade = makePottery(clayBought)



 const bisqueFire = (obj) => {
     obj.readyForFireGlazing = true
     return obj
 }
 const fireBisqued = bisqueFire(potteryMade)



 const glazePottery = (obj) => {
     if (obj.readyForFireGlazing === true) {
         obj.glazing = "Midnight Blue"
         return obj
     } else {
         console.log("Make sure you bisque fire the pottery before you glaze it.")    
     } 
 }
const potteryGlazed = glazePottery(fireBisqued)

 const finalFiring = (obj, temp) => {
     if (temp < 1200) {
         obj.cracked = false
     }  else  {
         obj.cracked = true
     }
    return obj
}
const firingFinal = finalFiring(potteryGlazed, 5000)

console.log(firingFinal)






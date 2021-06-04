let stocks = {
  fruits: [
    {name: "Strawberry", icon: "🍓"},
    {name: "Pineapple", icon: "🍍"},
    {name: "Banana", icon: "🍌"},
    {name: "Cherry", icon: "🍒"},
    {name: "Lemon", icon: "🍋"},
    {name: "Peach", icon: "🍑"},
    {name: "Pear", icon: "🍐"},
    {name: "Orange", icon: "🍊"},
    {name: "Grapes", icon: "🍇"},
    {name: "Blueberries", icon: "🫐"},
    {name: "Mango", icon: "🥭"},
    {name: "Apple", icon: "🍎"},
    {name: "Water Melon", icon: "🍉"},
    {name: "Honey Melon", icon: "🍈"}
  ],
  liquid : ["Water", "Milk", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Sprinkles"]
}

let order = (callProduction) => {
  console.log("Order placed.")
  console.log("Initiate production.")
  callProduction()
}

let production = () => {
  console.log("Production started")
}

stocks.fruits.forEach(({name, icon}) => addMenuItem(`${icon} ${name}`, '.fruits'))
stocks.holder.map(holder => addMenuItem(holder, '.holder'))
stocks.toppings.map(topping => addMenuItem(topping, '.toppings'))

function addMenuItem(el, target){
  let menu = document.querySelector(target)
  let li = document.createElement('li')
  let text = document.createTextNode(el)
  li.appendChild(text)
  return menu.appendChild(li)
}

order(production)
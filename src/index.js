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

let steps = [
  {name: "place order", time: 3000},
  {name: "fetch ingredients", time: 3000},
  {name: "cut the fruit", time: 2000},
  {name: "add fluids and ice", time: 1000},
  {name: "start the machine", time: 1000},
  {name: "select container", time: 2000},
  {name: "select topping", time: 3000},
  {name: "serve ice cream", time: 2000}
]

let order = (callProduction) => {
  console.log("Order placed.")
  console.log("Initiate production.")
  callProduction()
}

let production = () => {
  console.log("Production started")
}

stocks.fruits.forEach(({name, icon}) => addMenuItem(`${icon} ${name}`, '.menu__fruits'))
stocks.holder.map(holder => addMenuItem(holder, '.menu__holder'))
stocks.toppings.map(topping => addMenuItem(topping, '.menu__toppings'))

function addMenuItem(el, target){
  let menu = document.querySelector(target)
  let li = document.createElement('li')
  let text = document.createTextNode(el)
  li.appendChild(text)
  return menu.appendChild(li)
}

order(production)
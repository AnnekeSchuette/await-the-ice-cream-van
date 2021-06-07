let is_shop_open = true

let stocks = {
  fruits: [
    {name: "strawberry", icon: "🍓"},
    {name: "pineapple", icon: "🍍"},
    {name: "banana", icon: "🍌"},
    {name: "cherry", icon: "🍒"},
    {name: "lemon", icon: "🍋"},
    {name: "peach", icon: "🍑"},
    {name: "pear", icon: "🍐"},
    {name: "orange", icon: "🍊"},
    {name: "grapes", icon: "🍇"},
    {name: "blueberries", icon: "🫐"},
    {name: "mango", icon: "🥭"},
    {name: "apple", icon: "🍎"},
    {name: "water melon", icon: "🍉"},
    {name: "honey melon", icon: "🍈"}
  ],
  liquid : ["water", "milk", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"]
}

interface Steps {
  name: string
  time: number
  text: string
}[]

let steps: {
    name: string
    time: number
    text: string
  }[]

steps = [
  {name: "greeting", time: 1000, text: `Hello, dear friend!`},
  {name: "info", time: 1000, text: `We've-a got-a many sorts of flavors, you know. \n Just take a look-a at the menu.`},
  {name: "question", time: 3000, text: `Which-a ice cream flavor do you desire?`},
  {name: "place order", time: 3000, text: `${stocks.fruits[1].name} selected`},
  {name: "fetch ingredients", time: 3000, text: `${stocks.fruits[1].name} fetched from stocks`},
  {name: "cut the fruit", time: 2000, text: `fruit cut`},
  {name: "add liquid and ice", time: 1000, text: `${stocks.liquid[1]} added`},
  {name: "start the machine", time: 1000, text: `machine was started, timer is running (5s)`},
  {name: "machine beeps", time: 5000, text: `Ice cream is ready`},
  {name: "select container", time: 2000, text: `ice cream placed on ${stocks.holder[0]}`},
  {name: "select topping", time: 3000, text: `${stocks.toppings[0]} added as toppings`},
  {name: "serve ice cream", time: 2000, text: `ice cream served`}
]

function order(time: number, work: any): Promise<any> {
  return new Promise((resolve, reject): void => {
    if (is_shop_open) {
      setTimeout((): void => {

        // work is 👇 getting done here
        resolve(work())

        // Setting 👇 time here for 1 work
      }, time)
    }
    else {
      reject(console.log("Our shop is closed"))
    }
  })
}

// create menu card from stocks/ingredients
let fruits = stocks.fruits.forEach(({name, icon}) => addMenuItem(`${icon} ${name}`, '.menu__fruits'))
let holder = stocks.holder.map(holder => addMenuItem(holder, '.menu__holder'))
let toppings = stocks.toppings.map(topping => addMenuItem(topping, '.menu__toppings'))

function addMenuItem(el: string, container: string): HTMLLIElement{
  let menu = document.querySelector<HTMLDivElement>(container)
  let li = document.createElement('li')
  let text = document.createTextNode(el)
  li.appendChild<Text>(text)
  return menu.appendChild(li)
}

function printDialog(text: string): void {
  const dialogue = document.querySelector<HTMLElement>('.dialogue')
  dialogue.innerText = text
}

async function* processProduction(steps: Steps[]): AsyncGenerator<number, void, unknown>{
  for (let i: number = 0; i < steps.length; i++) yield order(steps[i].time, () => console.log(`${i+1}: ${steps[i].name}`)).then(() => i)
}

(async function loopSteps(): Promise<void> {
  for await (let i of processProduction(steps)) printDialog(steps[i].text);
})();

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
var is_shop_open = true;
var stocks = {
    fruits: [
        { name: "strawberry", icon: "🍓" },
        { name: "pineapple", icon: "🍍" },
        { name: "banana", icon: "🍌" },
        { name: "cherry", icon: "🍒" },
        { name: "lemon", icon: "🍋" },
        { name: "peach", icon: "🍑" },
        { name: "pear", icon: "🍐" },
        { name: "orange", icon: "🍊" },
        { name: "grapes", icon: "🍇" },
        { name: "blueberries", icon: "🫐" },
        { name: "mango", icon: "🥭" },
        { name: "apple", icon: "🍎" },
        { name: "water melon", icon: "🍉" },
        { name: "honey melon", icon: "🍈" }
    ],
    liquid: ["water", "milk", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "sprinkles"]
};
var steps = [
    { name: "greeting", time: 1000, text: "Hello, dear friend!" },
    { name: "info", time: 1000, text: "We've-a got-a many sorts of flavors, you know. \n Just take a look-a at the menu." },
    { name: "question", time: 3000, text: "Which-a ice cream flavor do you desire?" },
    { name: "place order", time: 3000, text: stocks.fruits[1].name + " selected" },
    { name: "fetch ingredients", time: 3000, text: stocks.fruits[1].name + " fetched from stocks" },
    { name: "cut the fruit", time: 2000, text: "fruit cut" },
    { name: "add liquid and ice", time: 1000, text: stocks.liquid[1] + " added" },
    { name: "start the machine", time: 1000, text: "machine was started, timer is running (5s)" },
    { name: "machine beeps", time: 5000, text: "Ice cream is ready" },
    { name: "select container", time: 2000, text: "ice cream placed on " + stocks.holder[0] },
    { name: "select topping", time: 3000, text: stocks.toppings[0] + " added as toppings" },
    { name: "serve ice cream", time: 2000, text: "ice cream served" }
];
function order(time, work) {
    return new Promise(function (resolve, reject) {
        if (is_shop_open) {
            setTimeout(function () {
                // work is 👇 getting done here
                resolve(work());
                // Setting 👇 time here for 1 work
            }, time);
        }
        else {
            reject(console.log("Our shop is closed"));
        }
    });
}
// create menu card from stocks/ingredients
var fruits = stocks.fruits.forEach(function (_a) {
    var name = _a.name, icon = _a.icon;
    return addMenuItem(icon + " " + name, '.menu__fruits');
});
var holder = stocks.holder.map(function (holder) { return addMenuItem(holder, '.menu__holder'); });
var toppings = stocks.toppings.map(function (topping) { return addMenuItem(topping, '.menu__toppings'); });
function addMenuItem(el, container) {
    var menu = document.querySelector(container);
    var li = document.createElement('li');
    var text = document.createTextNode(el);
    li.appendChild(text);
    return menu.appendChild(li);
}
function printDialog(text) {
    var dialogue = document.querySelector('.dialogue');
    dialogue.innerText = text;
}
function processProduction(steps) {
    return __asyncGenerator(this, arguments, function processProduction_1() {
        var _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function (i) {
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, __await(order(steps[i].time, function () { return console.log(i + 1 + ": " + steps[i].name); }).then(function () { return i; }))];
                                case 1: return [4 /*yield*/, _b.sent()];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < steps.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
(function loopSteps() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, i, e_1_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 11]);
                    _b = __asyncValues(processProduction(steps));
                    _d.label = 1;
                case 1: return [4 /*yield*/, _b.next()];
                case 2:
                    if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 4];
                    i = _c.value;
                    printDialog(steps[i].text);
                    _d.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 11];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 11];
                case 6:
                    _d.trys.push([6, , 9, 10]);
                    if (!(_c && !_c.done && (_a = _b["return"]))) return [3 /*break*/, 8];
                    return [4 /*yield*/, _a.call(_b)];
                case 7:
                    _d.sent();
                    _d.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 10: return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
})();

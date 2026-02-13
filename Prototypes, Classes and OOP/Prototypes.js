String.prototype.yell = function(){
    return `WEINERS COCK AND BALLS ${this.toUpperCase()}`;
};

Array.prototype.pop = function() {
    return 'I will never pop that element';
};


// ************************************************************************
// FACTORY FUNCTION CREATING METHODS WITHIN AN OBJECT

// function hex(r,g,b) {
//     return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// } 
// function makeColor(r,g,b){
//     const color= {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function() {
//         const {r, g, b} = this;
//         return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
//     }
//     return color;
// }
// const firstColor = makeColor(35,255,150);
// firstColor.rgb();
// firstColor.hex();



// *****************************************************************************
// CONSTRUCTOR FUNCTION
// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Color.prototype.rgb = function(){
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function() {
//         const {r, g, b} = this;
//         return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
// };
// Color.prototype.rgba = function(a=1.0){
//     const {r, g, b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };
// const color1 =new Color(255,40,100);
// const color2 =new Color(25,200,10);

// ********************************************************************************************
// JAVASCRIPT CLASSES
// class Color{
//     constructor(r,g,b,name){
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//         this.calcHSL();
//     }
//     innerRGB(){
//         const {r,g,b} = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb(){
//         return `rgb(${this.innerRGB()})`;
//     }
//     hex(){
//         return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
//     }
//     rgba(a=1.0){
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }
//     hsl(){
//         const {h,s,l} = this;
//         return `hsl(${h}, ${s}%, ${l}%)`
//     }
//     fullSaturation(){
//         const {h, l}= this;
//         return `hsl(${h}, 100%, ${l})`;
//     }
//     opposite(){
//         const {h,s,l} = this;
//         const newHue = (h + 180) % 360;
//         return `hsl(${newHue}, ${s}%, ${l}%)`
//     }
//     calcHSL() {
//     let {r, g, b} = this;
//     // Normalize R, G, B to the 0-1 range
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     let cmin = Math.min(r, g, b),
//         cmax = Math.max(r, g, b),
//         delta = cmax - cmin,
//         h = 0,
//         s = 0,
//         l = 0;

//     // Calculate hue
//     if (delta === 0) {
//         h = 0;
//     } else if (cmax === r) {
//         h = ((g - b) / delta) % 6;
//     } else if (cmax === g) {
//         h = (b - r) / delta + 2;
//     } else {
//         h = (r - g) / delta + 4;
//     }

//     h = Math.round(h * 60);
//     if (h < 0) {
//         h += 360;
//     }

//     // Calculate lightness
//     l = (cmax + cmin) / 2;

//     // Calculate saturation
//     s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//     // Convert saturation and lightness to percentages (0-100)
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);

//     this.h = h;
//     this.s = s;
//     this.l = l; // Returns an array: [hue, saturation, lightness]
// }
// }

// const red =  new Color(255, 67, 89, 'tomato');
// const white =  new Color(255, 255, 255, 'white');


// *************************************************************************
// EXTEND AND SUPER
class Pet{
        constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
}
class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return `${this.name} says meow`
    }
}
class Dog extends Pet{
    woof(){
        return `${this.name} says woof`
    }
    eat(){
        return `${this.name} scarfs her food`
    }
}

const riley = new Cat ('Riley', 10);
const ruby = new Dog ('Ruby', 11);
const olivia = new Cat ('Olivia', 12)

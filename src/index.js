import _ from 'lodash';   // Lodash, now imported by this script
import sonic from "./sonic.js";
import './style.css';
import sonic_pic from './images/sonic.png';
import chars from './chars.csv';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack',"             CcccCCCCCCCCCCCCCCcc"], ' ');
    element.classList.add('hello');
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
  
    return element;
}

function sonicComponent() {
    const element = document.createElement('div');
    console.log(chars);
    const sonic_string = sonic(Math.floor(Math.random()*8)+1);
    element.innerHTML= sonic_string;
    element.classList.add("sonic");
    chars.forEach(char => {
        if (sonic_string.includes(char[0])){
            element.setAttribute("style",`color:${char[1]};`)
        }
    });

    const img = document.createElement("img");
    img.src = sonic_pic;

    element.appendChild(img);

    return element;
}
  
document.body.appendChild(component());
document.body.appendChild(sonicComponent());
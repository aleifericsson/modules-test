import _ from 'lodash';   // Lodash, now imported by this script
import sonic from "./sonic";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}

function sonicComponent() {
    const element = document.createElement('p');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = sonic(Math.floor(Math.random()*8)+1);
  
    return element;
}
  
document.body.appendChild(component());
document.body.appendChild(sonicComponent());
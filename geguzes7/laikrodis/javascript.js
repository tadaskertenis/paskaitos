'use strict'

// kaip padaryti laikrodį
setInterval(manoLaikrodis, 1000);
function manoLaikrodis(){
const data = new Date();
document.querySelector('#result').innerText = data.toLocaleTimeString()
};

//manoLaikrodis()
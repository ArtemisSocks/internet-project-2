/* Cat facts API endpoint:
 * https://cat-fact.herokuapp.com/facts
 * 
 * Cat images API endpoint:
 * https://api.thecatapi.com/v1/images/search
 */

const globals = { button : [] };

async function getCat() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  if (response.ok) {
    let json = await response.json();
      let url = json[0].url
    console.log(url);
  } else {
    alert("HTTP-Error: " + response.status);
  }
    let cat = getCat[0].url
}



function randomize() {
    let which = [];
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    which.push(randomNumber);
    globals.push(which); 
    return which;
} 

function button() {
  let certain = document.getElementById("randomize");

}







/* Cat facts API endpoint:
 * https://cat-fact.herokuapp.com/facts
 * 
 * Cat images API endpoint:
 * https://api.thecatapi.com/v1/images/search
 */


let rand;

async function getCat() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  if (response.ok) {
    let json = await response.json();
      let url = json[0].url
      document.getElementById("cat").src = url;
    console.log(url);
  } else {
    alert("HTTP-Error: " + response.status);
  }

}



function randomize() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    rand = randomNumber;
} 

function button(i) {
 if (i == rand){
     console.log(cat);
     getCat();

 }
else{
    document.getElementById("words").innerText = "Try again";
}

}





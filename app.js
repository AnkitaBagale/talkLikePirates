

var translateBtn= document.querySelector('#translateBtn');
var userInput=document.querySelector('#userInput');
var output = document.querySelector('#output');
var serverUrl="https://api.funtranslations.com/translate/pirate.json";


//adjust height of background image
//fixing footer to bottom if screen height is bigger than content height;
var contentHeight= document.querySelector('.place-over-bg').clientHeight;
var minHeight = screen.height;
var footer =document.querySelector('.footer');
var img = document.querySelector('#bg');

window.addEventListener('DOMContentLoaded', () => {
    if(minHeight > contentHeight){
        contentHeight = minHeight;
        footer.classList.add('bottom0');
    }
    img.style.height = contentHeight+"px";
  });

//to add query parameter and key in api url
function createUrl(text){
    return encodeURI(serverUrl+"?"+"text="+text);
}

//to handle server down error
function errorHandler(error){
    console.log("Error is occurred"+error);
    alert("Looks like server is down. Please try again after sometime")
}

//fetch the translated text from json
function translate(){

    fetch(createUrl(userInput.value))
    .then(response => response.json())
    .then(json => {
        output.innerText= json.contents.translated
    })
    .catch(errorHandler);

}

//handling event occurance
translateBtn.addEventListener("click", translate);
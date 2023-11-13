const form = document.querySelector("form");
form.addEventListener("submit",function(send){
// send.preventDefault();
const email = document.querySelector("#email").value;
const password = parseInt(document.querySelector("#password").value);
console.log(email);
console.log(password);
});

const body = document.querySelector("body");
const change = document.querySelectorAll(".change");
console.log(change);

change.forEach(function(arra){
    arra.addEventListener("click",function(send){
        switch(send.target.id)
        {
            case "bisque":
                body.style.backgroundColor = send.target.id;
                body.style.color = "balck"
                break;
            
            case "orange":
                body.style.backgroundColor = "#A6CF98";
                body.style.color = "white";
                break;

            case "red":
                body.style.backgroundColor = "#A9A9A9";
                body.style.color = "black";
                break;
                
        }
         

    });
})


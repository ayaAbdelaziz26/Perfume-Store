let mybtn1=document.querySelector(".size1");
let mybtn2=document.querySelector(".size2");
let mybtn3=document.querySelector(".size3");
let myName=document.getElementById("n");
let myBrand=document.getElementById("b");
let myPrice=document.getElementById("p");
let myImage=document.getElementById("Im");
let tname=document.getElementById("tn");
let tbrand=document.getElementById("tb");
let tgender=document.getElementById("tg");
let tcountry=document.getElementById("tc");
let mystars=document.querySelectorAll(".stars i");

myName.innerText=`${localStorage.getItem("name")}`;
myBrand.innerText=`${localStorage.getItem("brand")} for ${localStorage.getItem("gender")}`;
myPrice.innerText=`${localStorage.getItem("price1")}`;
myImage.src=`${localStorage.getItem("image")}`;
tname.innerText=`${localStorage.getItem("name")}`;
tbrand.innerText=`${localStorage.getItem("brand")}`;
tgender.innerText=`${localStorage.getItem("gender")}`;
tcountry.innerText=`${localStorage.getItem("country")}`;


mybtn1.addEventListener("click",()=>{
        mybtn1.style.backgroundColor="#57340e";
        mybtn2.style.backgroundColor="#fff";
        mybtn3.style.backgroundColor="#fff";
        myPrice.innerText=`${localStorage.getItem("price1")}`;
    })

    mybtn2.addEventListener("click",()=>{
        mybtn2.style.backgroundColor="#57340e";
        mybtn1.style.backgroundColor="#fff";
        mybtn3.style.backgroundColor="#fff";
        myPrice.innerText=`${localStorage.getItem("price2")}`;
    })

    mybtn3.addEventListener("click",()=>{
        mybtn3.style.backgroundColor="#57340e";
        mybtn1.style.backgroundColor="#fff";
        mybtn2.style.backgroundColor="#fff";
        myPrice.innerText=`${localStorage.getItem("price3")}`;
    })

    mystars.forEach((star,index)=>{
        star.addEventListener('click',()=>{
      
          let current_star=index+1;
      
          mystars.forEach((star,i)=>{
              if(current_star>=i+1){
                star.style.color="rgb(218, 218, 56)";
              }else{
                star.style.color="";
              }
          });
      
        });
      });


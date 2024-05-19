let mydiv=document.querySelectorAll(".row");
let myprice=document.querySelectorAll(".price");
let myname=document.querySelectorAll(".name");
let mybrand=document.querySelectorAll(".brand");
let mygender=document.querySelectorAll(".gender");
let myimage=document.querySelectorAll(".product");
let mybtn=document.querySelectorAll(".btn");
let mystars=document.querySelectorAll(".stars");
mydiv.forEach(di=>{
    di.addEventListener("mousemove",function(){
        var num=this.id;
        myname[num].style.opacity="0.1";
        mybrand[num].style.opacity="0.1";
        mygender[num].style.opacity="0.1";
        myprice[num].style.opacity="0.3";
        myimage[num].style.opacity="0.1";
        mybtn[num].style.display="block";
        mystars[num].style.opacity="0.1";
    })
})

mydiv.forEach(di=>{
    di.addEventListener("mouseout",function(){
        var num=this.id;
        myname[num].style.opacity="";
        mybrand[num].style.opacity="";
        mygender[num].style.opacity="";
        myprice[num].style.opacity="";
        myimage[num].style.opacity="";
        mybtn[num].style.display="";
        mystars[num].style.opacity="";
    })
})


function changeSelected(){
    if(document.getElementById('Brand').value=="cc"){
   for(var i=0;i<mydiv.length;i++){
    if(mybrand[i].innerText!=="by Calvin Clein"){
        mydiv[i].style.display="none";
    }
   }
}
}

function changeSelected(){
    if(document.getElementById('Brand').value=="d"){
    for(var i=0;i<mydiv.length;i++){
     if(mybrand[i].innerText!=="by Dior"){
         mydiv[i].style.display="none";
     }
    }
 }
}


mybtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        var number=e.target.parentNode.id;

        localStorage.setItem("name",`${myname[number].innerText}`)
        localStorage.setItem("brand",`${mybrand[number].innerText}`)
        localStorage.setItem("gender",`${mygender[number].innerText}`)
        localStorage.setItem("price",`${myprice[number].innerText}`)
        localStorage.setItem("image",`${myimage[number].src}`)  
        
        var p=localStorage.getItem("price");
        var pNum=parseInt(p);
        localStorage.setItem("price1",`${pNum}$`)
        localStorage.setItem("price2",`${pNum+5}$`)  
        localStorage.setItem("price3",`${pNum+10}$`)

        if(localStorage.getItem("brand")==="by Dior" || localStorage.getItem("brand")==="by Chanel"){
            localStorage.setItem("country","France");
        }
        else if(localStorage.getItem("brand")==="by Versace" || localStorage.getItem("brand")==="by Dolce & Gabbana"){
            localStorage.setItem("country","Italy")
        }
        else if(localStorage.getItem("brand")==="by Calvin Clain"){
            localStorage.setItem("country","America");
        }
        
        window.location.href='Product.html';

    })
})

function p(msg){
    console.log(msg)
}

document.querySelectorAll("[data-style]").forEach((element)=>{
    element.dataset.style.split(",").map((ele)=>{
            var ele=ele.replaceAll(" ","")
            var pro=ele.split("-") 
            var key= test(pro[0])
            $(element).css(key,pro[1])
        })
    
    
    })



function test(value){
    switch(value){
        case "h":return key="height"
        case "w":return key="width"
        case "b":return key="border"
        case "c":return key="color"
        case "bc":return key="background"
        case "f":return key="fontSize"
        case "p":return key="padding"
        case "m":return key="margin"
        case "br":return key="borderRadius"
        case "d":return key="display"
        case "br":return key="borderRadius"
        case "br":return key="borderRadius"

        
    }       
}




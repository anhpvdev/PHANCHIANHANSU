console.log("hello")

function printfday(inp,checkday){
    for(i=1; i<=31;i++){
    
        checkday ++
        switch(inp) {
            case 2:
                document.getElementById(checkday).innerText = "HAI";
              break;
            case 3:
                document.getElementById(checkday).innerText = "BA";
            break;
            case 4:
                document.getElementById(checkday).innerText = "TƯ";
            break;
            case 5:
                document.getElementById(checkday).innerText = "NĂM";
            break;
            case 6:
                document.getElementById(checkday).innerText = "SÁU";
            break;
            case 7:
                document.getElementById(checkday).innerText = "BẢY";
            break;
            case 8:
                document.getElementById(checkday).innerText = "CHỦ NHẬT";
                var col = "col_"+i;
                document.getElementById(col).style.backgroundColor = "yellow";
            break;
           
          }
        inp++
        if(inp >8 ){
            inp = 2
        }
    }
}

function printfnv(checknv){
    for(i=1;i<=217;i++){
        checknv ++
        document.getElementById(i).innerText = checknv
    
        if(checknv>10){
            checknv=0
        }
    }
}








document.getElementById("start").onclick = function(){

    var checkday = 10000
    var checknv = 0 
    var inp = document.getElementById("valueinput").value
    if(inp<2 || inp>8){
        alert("nhập sai thứ")
    }else{
        printfday(inp,checkday)
        printfnv(checknv)
    }
}






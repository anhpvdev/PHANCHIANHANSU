console.log("hello")

function printfday(inp,checkday,day){
    for(i=1; i<=day;i++){
        
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

function printfnv(checknv,day){
    for(i=1;i<=day*7;i++){
        checknv ++
        document.getElementById(i).innerText = checknv
    
        if(checknv==10){
            checknv=0
        }
    }
}


function tinhcong(checknv,day){
    let nv1=0, nv2=0, nv3=0, nv4=0, nv5=0, nv6=0, nv7=0, nv8=0, nv9=0, nv10=0
    for(i=1;i<=day*7;i++){
        checknv ++
        let cout = document.getElementById(i).textContent
 
        switch(cout) {
            case '1':
                console.log("hehe")
                nv1 ++
            break;

            case '2':
                nv2 ++
            break;
            case '3':
                nv3 ++
            break;

            case '4':
                nv4 ++
            break;

            case '5':
                nv5 ++
            break;

            case '6':
                nv6 ++
            break;

            case '7':
                nv7 ++
            break;

            case '8':
               nv8 ++
            break;

            case '9':
               nv9 ++
            break;

            case '10':
               nv10 ++
            break;
          }
    }

    document.getElementById("cong_1").innerHTML = nv1
    document.getElementById("cong_2").innerText = nv2
    document.getElementById("cong_3").innerText = nv3
    document.getElementById("cong_4").innerText = nv4
    document.getElementById("cong_5").innerText = nv5
    document.getElementById("cong_6").innerText = nv6
    document.getElementById("cong_7").innerText = nv7
    document.getElementById("cong_8").innerText = nv8
    document.getElementById("cong_9").innerText = nv9
    document.getElementById("cong_10").innerText = nv10
    document.getElementById("cong_11").innerText = nv1 + nv2 + nv3 +nv4 +nv5+nv6+nv7+nv8+nv9+nv10
}








document.getElementById("start").onclick = function(){

    var checkday = 10000
    var checknv = 0 
    var inp = document.getElementById("valueinput").value
    if(inp<2 || inp>8){
        alert("nhập sai thứ")
    }else{

        var day= document.getElementById("dayinput").value
        printfday(inp,checkday,day)
        printfnv(checknv,day)
        tinhcong(checknv,day)
    }
}






function Reset() {
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("KQ").value = null;
    document.getElementById("log").innerText = "";
}

function Check(a,b,c) {
    //c la gia tri so
    if(isNaN(c) == false){
        document.getElementById("KQ").value = c;
        document.getElementById("log").innerText = "";
    }
    else{
        if(isNaN(a) == true && isNaN(b) == true){
            document.getElementById("log").innerText = "Vui lòng nhập a và b ở dạng giá trị số!";
            document.getElementById("a").value = null;
            document.getElementById("b").value = null;
            document.getElementById("KQ").value = null;
        }
        else{
            if(isNaN(a) == true){
                document.getElementById("log").innerText = "Vui lòng nhập a ở dạng giá trị số!";
                document.getElementById("a").value = null;
                document.getElementById("KQ").value = null;
            }
            else{
                document.getElementById("log").innerText = "Vui lòng nhập b ở dạng giá trị số!";
                document.getElementById("b").value = null;
                document.getElementById("KQ").value = null;
            }
        }
    }
}

function Sum(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var s = parseFloat(a) + parseFloat(b);
    Check(a,b,s);
}

function Minus(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var s = parseFloat(a) - parseFloat(b);
    Check(a,b,s);
}

function Mul(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var m = parseFloat(a) * parseFloat(b);
    Check(a,b,m);
}

function Divide(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if(b==0){
        document.getElementById("log").innerText = "Vui lòng nhập b khác 0!";
        document.getElementById("b").value = null;
        document.getElementById("KQ").innerText = "ERROR!";
    }
    else{
        var d = parseFloat(a) / parseFloat(b);
        Check(a,b,d);
    }
}
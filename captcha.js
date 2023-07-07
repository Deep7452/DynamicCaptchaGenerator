function myCaptcha()
{
     var str="A4sQ2WaV5XdZ6YfM7KgL8h9j0k1lQ"   // char   ....0-27
    //  alert(str.length);
    var len=str.length;
   
    // alert( "RADOM INDEX :" +rIndex);
    // alert('RCHAR :' +rChar);
    var captcha=""
    for( var i=0;i<=5;i++)
    {
        var rIndex= Math.floor(Math.random()*len)
        var rChar=str[rIndex];
        captcha=captcha+rChar;
    }
    document.querySelector("s").innerText=captcha;
}
function checkCaptcha()
{
    var s=document.querySelector("s")
    var msg=document.querySelector("i")
    var t=document.querySelector("#myInput")
    if(s.innerText==t.value.trim())
    {
        s.style.border="3px solid green"
        t.style.border="3px solid green"
        msg.innerText="Valid captcha code..."
        msg.style.color="green"
    }
    else
    {
        s.style.border="3px solid red";
        t.style.border="3px solid red";
        msg.innerText="Invalid captcha"
        msg.style.color="red"
    }

    Window.addEventListener("load",function(){
        const input =document.getElementById('myInput');
        input.focus();
    });
}

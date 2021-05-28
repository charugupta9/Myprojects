var count = 1;
function fill(control)
{
    if(checkWin())
    {
        alert("winner");
    }else
    {
    if(count<=9)
    {
    if(count%2!=0)
    {
        document.getElementById(control.id).innerHTML = "X";
    }else
    {
        document.getElementById(control.id).innerHTML = "O";
    }
    count++;
}else 
{
    alert("Match Draw");
    reset();
}
}
}
function reset()
{
    for(var i=1;i<=9;i++)
    {
        document.getElementById("div"+i).innerHTML = "";
    }
}
function checkWin()
{
    if(document.getElementById('div1').innerHTML!="" && document.getElementById('div2').innerHTML!="" &&
    document.getElementById('div3').innerHTML!="" && document.getElementById('div1').innerHTML==document.getElementById(div2).innerHTML
    && document.getElementById('div2').innerHTML== document.getElementById('div3').innerHTML)
    {
        return true;
    }
}
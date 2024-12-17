async function mul(a,b)
{
    let sum = await a*b;
    display(sum);
}
function display(sum)
{
    document.getElementById("output").innerHTML = sum;
}
mul(9,9)
async function div(a,b)
{
    let sum = await a/b;
    display(sum);
}
function display(sum)
{
    document.getElementById("output").innerHTML = sum;
}
div(6,2)
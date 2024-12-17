async function sub(a,b)
{
    let sum = await a-b;
    display(sum);
}
function display(sum)
{
    document.getElementById("output").innerHTML = sum;
}
sub(8,4)
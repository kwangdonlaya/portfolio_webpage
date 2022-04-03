var i = 0;

function postFunction() 
{
    var text = document.getElementById("text1").value;
    if (i == 0)
    {
        document.getElementById("topic1").innerHTML = text;
        i++;
    }
    else if (i == 1)
    {
        document.getElementById("comment1").innerHTML = text;
        i++;
    }
    else if (i == 2) 
    {
        document.getElementById("comment2").innerHTML = text;
        i++;
    }
    else if (i == 3)
    {
        document.getElementById("comment3").innerHTML = text;
        i++;
    }
    else if (i == 4) 
    {
        document.getElementById("comment4").innerHTML = text;
        i++;
    }else if (i == 5)
    {
        document.getElementById("comment5").innerHTML = text;
        i++;
    }
    else if (i == 6) 
    {
        document.getElementById("comment6").innerHTML = text;
        i++;
    }
    else
    {
        return null;
    }
    document.getElementById("text1").value = "";
}
function clearFunction() 
{
    document.getElementById("topic1").innerHTML = null;
    document.getElementById("comment1").innerHTML = null;
    document.getElementById("comment2").innerHTML = null;
    document.getElementById("comment3").innerHTML = null;
    document.getElementById("comment4").innerHTML = null;
    document.getElementById("comment5").innerHTML = null;
    document.getElementById("comment6").innerHTML = null;
    document.getElementById("text1").value = "";
    i = 0;
}
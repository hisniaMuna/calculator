alert('Welcome to Calculator');

function input(e)
{
    val=document.myForm.textView.value
    if(e)
    document.myForm.textView.value+=e;
    else
    document.myForm.textView.value=null;
}

function output()
{
try{
    val=document.myForm.textView.value
    if(val)
{
    var output=eval(document.myForm.textView.value);
    return document.myForm.textView.value=output;
        }
    }


catch(e)
{
    alert(e.messege);
    //document.myForm.textView.value=null;
}
}
function bsp()
{
    val=document.myForm.textView.value;
    back=val.substring(0,val.length-1)

    document.myForm.textView.value=back;
}

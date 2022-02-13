function range(a,b)
{
  setInterval( function(){
    if (a <= b)
    {
      console.log(a);
      a++
    }
  }, 1000);
}

range(5, 15)
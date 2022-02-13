function numberType(n){
  if (n < 1000 && n != 0)
  {
	if (n == 1)
		return "число простое"
	else
	{
		let d = 2
		  while (n % d != 0)
			d += 1
		if (d == n)
		   return "число простое"
		else
		  return "число не простое"
	}
  }
  else
    return "Данные неверны"   
}


console.log(numberType(17))
console.log(numberType(25))
console.log(numberType(1200))
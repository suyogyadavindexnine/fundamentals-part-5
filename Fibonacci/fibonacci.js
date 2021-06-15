function fibonacci(num)
{
	var num1=0;
	var num2=1;
	var sum;
	var i=0;
	for (i = 0; i < num; i++)
	{
		sum=num1+num2;
		num1=num2;
		num2=sum;
        console.log(sum);
	}
	return num2;
}

console.log("Fibonacci(4): "+fibonacci(4));
console.log("Fibonacci(8): "+fibonacci(8));
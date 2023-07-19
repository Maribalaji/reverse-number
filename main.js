var a=prompt("Enter a value");
var b=0;
var c;
document.write("The given number is "+a+"<br>");
while(a>0){
	c=a%10;
	b=b*10+c;
	a=parseInt(a/10);
}
document.write("The reverse number is"+b);
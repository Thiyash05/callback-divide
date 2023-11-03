// Program for divde two numbers using callback function 
// Create one function name  "operation" in this function
// first two parameter is value  the third parameter is 
// a callback function. create another function named
// Divide pass this function (callback")as an argument
// and then calling it inside the parent function 
// i.e., operation. Here, we have taken the "divide"
// as the callback function, we can create any function 
// and pass it as the callback in the operation function.

    let operation=(num1,num2,divde)=>{
		
        return divde(num1,num2)

	}
	document.write(operation(20,5,divde));
	
	function divde(num1,num2){
		return num1/num2
	}
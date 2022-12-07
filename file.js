<! i)	Create a Form using HTML and use Java Script for Multiplication and Division>
                                                
<html> 
<head>
<title>JavaScript program to calculate multiplication and division of two numbers </title>
<style type="text/css">
body {margin: 30px;
background-color: palevioletred;}
</style> 
</head>
<body> <script> function multiplyBy()
        {
                num1 = document.getElementById("firstNumber").value;
                num2 = document.getElementById("secondNumber").value;
                document.getElementById("result").innerHTML = num1 * num2;
        }
        
        function divideBy() 
        { 
                num1 = document.getElementById("firstNumber").value;
                num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
        }
         </script>
<form>
1st Number : <input type="text" id="firstNumber" /><br>
2nd Number: <input type="text" id="secondNumber" /><br>
<input type="button" onClick="multiplyBy()" Value="Multiply" />
<input type="button" onClick="divideBy()" Value="Divide" />
</form>
<p>The Result is : <br>
<span id = "result"></span>
</p>
</body>
</html>



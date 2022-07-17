// document.write("<br>Q1<br><br>")

// function dates(){
//     var now = new Date();
//     document.write(now)
// }
// dates()

// document.write("<br><br>Q2<br><br>")
// function names(){
//     var firstName = prompt("Enter Your First Name")
//     var secName = prompt("Enter Your Second Name")
//     document.write("Hello, Mr/Ms "+firstName+" "+secName)
// }
// names()


// document.write("<br><br>Q3<br><br>")
// var num1 = parseInt(prompt('Enter the first number '));
// var num2 = parseInt(prompt('Enter the second number '));
// function sum(num1,num2){
// 	return num1+num2;
// }

// document.write("Result: "+sum(num1,num2));


// document.write("<br><br>Q4<br><br>")
// function GFG(num1, num2) {
//     return num1 * num2;
// }
// document.write("Result: "+GFG(4,3));
// //         = ;
        

//  document.write("<br><br>Q5<br><br>")
// function sqr(num1) {
//     return num1 * num1;
// }
// document.write("Result: "+sqr(5));


// document.write("<br><br>Q6<br><br>")
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// document.write("<br><br>Q7<br><br>")

// function counting(){
//     var start=+prompt("enter tha start counting")
//     var end=+prompt("enter the mex counting")
//     for(var i=start; i <=end;i++){
// document.write([i]+"<br>")
//     }
//   }
//   counting()

// document.write("<br><br>Q8<br><br>")
// function hyp(base,prep){


//     var squareBase = base * base;
//     var sqaureprep =  prep * prep;


//     var sumOfBasePrep = sqaureprep + squareBase;

//     var SqaureRoot = Math.sqrt(sumOfBasePrep);

//     return SqaureRoot;
// }
// var Hypo = hyp(5,5);
// document.write("Result: "+Hypo)


// document.write("<br><br>Q9<br><br>")
//     function area(length, width) {
//         return length * width;
//     }
//     function perimeter(length, width) {
//         return 2*( length + width);
//     }
    
//     document.writeln('The area of your rectangle is ' + area(4, 5)+"<br>");         
//     document.writeln('The perimeter of your rectangle is ' + perimeter(4, 5));


document.write("<br><br>Q11<br><br>")
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));


document.write("<br><br>Q12<br><br>")
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));


document.write("<br><br>Q13<br><br>")

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write(char_count('JSResourceS.com', 'o'));

document.write("<br><br>Q14<br><br>")

function geometrizer(p1){
    var start=+prompt("enter tha start counting")

    Document.write("[ " +p1 * 3.147 * 2  + " ]"+ "<br>" + "This is the circumference of circle" + "<br>")
    Document.write("[ " +3.147 *(p1 * p1) + " ]"+ "<br>" + "This is the area of circle" + "<br>")
    
    }
    geometrizer(+ prompt("Enter the radius of circle"))



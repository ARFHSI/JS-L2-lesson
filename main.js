// =======================even numbers================

for (let index = 0; index <= 25; index += 2) {

    console.log(`index ${index}`);
}

// =======================odd numbers================

for (let index = 1; index <= 10; index += 2) {

    console.log(`index ${index}`);
}

// =======================squre numbers================

for (let i = 1; i <= 10; i++) {
    let square = i * i;
    console.log(i, "squared is", square);
  }

   // عملية الجمع
function sum(num1 , num2){
    return num1 + num2
    }
    
    var x = sum(2,2)
    var y = sum(4,4)
    console.log(x,y);
    
      // عملية الطرح
    
    function min(num1 , num2){
        return num1 - num2
        }
        
        var a = min(2,1)
        var b = min(3,8)
        console.log(a,b);
    
    
          // عملية الضرب
    
          function mult(num1 , num2){
            return num1 * num2
            }
            
            var c = mult(2,1)
            var d = mult(3,8)
            console.log(c,d);
    
            // عملية القسمة
    
            function divid(num1 , num2){
                return num1 / num2
                }
                
                var e = divid(2,1)
                var f = divid(3,8)
                console.log(e,f);

// ====++++====/////////////////////////---------------------------


var numbers=[0,1,2,3,4,5,6,7,8,9]
var mappar=[]

for (let i = 0; i < numbers.length; i++) {
    mappar.push(numbers[i]*10);
}
console.log(mappar);
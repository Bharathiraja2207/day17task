function elven(){
    one(two)
    setTimeout(() => {
        document.querySelector('.box').innerHTML = `<h3>Happy Independence Day</h3>`
    }, (11000));
   
}

function one (two){
    two(three) 
    setTimeout(() => { 
        document.querySelector('.box').innerHTML = `<h3>1</h3>`
        
    }, (10000));
   
}

function two(three){
    three(four)
    setTimeout(() => { 
         document.querySelector('.box').innerHTML = `<h3>2</h3>`
        
    }, (9000));
  
}
function three(four){
    four(five)
    setTimeout(() => { 
         document.querySelector('.box').innerHTML = `<h3>3</h3>`
        
    }, (8000));
   
}
function four(five){
    five(six)
    setTimeout(() => {
         document.querySelector('.box').innerHTML = `<h3>4</h3>`
        
    }, (6000));
    
}
function five(six){
    six(seven)
    setTimeout(() => {
         document.querySelector('.box').innerHTML = `<h3>5</h3>`
        
    }, (5000));
    
}
function six(seven){
    seven(eight)
    setTimeout(() => {
         document.querySelector('.box').innerHTML = `<h3>6</h3>`
    }, (4000));
   
}
function seven(eight){
    eight(nine)
    setTimeout(() => {
         document.querySelector('.box').innerHTML = `<h3>7</h3>`
    }, (3000));
    
}
function eight(nine){
    nine(ten)
    setTimeout(() => { 
         document.querySelector('.box').innerHTML = `<h3>8</h3>`
        
    }, (2000));

   
}
function nine(ten){
    ten(elven)
    setTimeout(() => { 
         document.querySelector('.box').innerHTML = `<h3>9</h3>`
        
    }, (1000));
   
}
function ten(){
    setTimeout(() => { 
         document.querySelector('.box').innerHTML = `<h3>10</h3>`
        
    }, (500));
}
elven(one)
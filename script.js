let sec_1 = document.getElementById('second1');
let sec_2 = document.getElementById('second2');
let min_1 = document.getElementById('minute1');
let min_2 = document.getElementById('minute2');
let hour_1 = document.getElementById('hour1');
let hour_2 = document.getElementById('hour2');
let start = document.getElementById('start');
let dateSecond = document.getElementById('dateSecond');
let dateMinute = document.getElementById('dateMinute');
let dateHour = document.getElementById('dateHour');



start.addEventListener('click',function(){
  
 setInterval(function(){
    sec_1.innerText++;

    if(sec_1.innerText === '10'){
        
         sec_1.innerText = 0;
        sec_2.innerText++;
    };
    if(sec_2.innerText === '6'){
        sec_2.innerText = 0;
        min_1.innerText++;   
    };
    if(min_1.innerText === '10'){
        min_1.innerText = 0;
        min_2.innerText++;
    };
   
    if(min_2.innerText === '6'){
        min_2.innerText = 0;
        hour_1.innerText++;
    };
   
    if(hour_1.innerText === '10'){
        hour_1.innerText = 0;
        hour_2.innerText++;
    };
    
    if(hour_2.innerText === '2' && hour_1.innerText === '4'){
        hour_2.innerText = 0;
        hour_1.innerText = 0;

        
    };
}, 1000);

})

    // --> Todays time

 setInterval (function (){
    let date = new Date();
    dateSecond.innerText = date.getSeconds();
    dateMinute.innerText = date.getMinutes();
    dateHour.innerText = date.getHours();
    },1000);

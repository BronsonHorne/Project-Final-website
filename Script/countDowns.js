function daysTilFallSemester(){
    today=new Date();
    var fallSem=new Date(today.getFullYear(), 7, 29);
    if (today.getMonth()==7 && today.getDate()>29) 
    {
    fallSem.setFullYear(fallSem.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    let tName = (Math.ceil((fallSem.getTime()-today.getTime())/(one_day))+
    " days left until Fall Semester");
    document.getElementById('outputFall').innerHTML = document.getElementById('tName').value;
}

function daysTilFootballSeason(){
    today=new Date();
    var fallSem=new Date(today.getFullYear(), 8, 23);
    if (today.getMonth()==8 && today.getDate()>23) 
    {
    fallSem.setFullYear(fallSem.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    let tName = (Math.ceil((fallSem.getTime()-today.getTime())/(one_day))+
    " days left until the First Football game of the Season");
    document.getElementById('outputFootball').innerHTML = document.getElementById('tName').value;
}

function daysTilMarchMadness(){
    today=new Date();
    var fallSem=new Date(today.getFullYear(), 2, 15);
    if (today.getMonth()==2 && today.getDate()>15) 
    {
    fallSem.setFullYear(fallSem.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    let tName = (Math.ceil((fallSem.getTime()-today.getTime())/(one_day))+
    " days left until March Madness");
    document.getElementById('outputMarch').innerHTML = document.getElementById('tName').value;
}

/* I prefer using querySelector since it can reference elements by class. It will return the first element that matches the selecter. Also, when referencing elements use a const */
const days = document.querySelector(".card span.days-summer");

/* I also prefer to separate JS from the HTML, so I recommend using eventlisteners. This will fire when the user's mouse enters the card with class .counter.  */
document.querySelector(".card.counter").addEventListener("mouseenter", () => {
  days.innerText = daysTilSummer();
});

/* I didn't change your function (or check its accuracy :D) except to strip the text -- better to have it in HTML (IMHO) and just return tName instead of declaring an additional variable. Also, I changed all your var declarations to let. Don't use var. var is bad. 

This works, but runs the calculations every time the mouse enters. How would you re-write so it only runs if the day's value has changed? */
function daysTilSummer() {
  today = new Date();
  let fallSem = new Date(today.getFullYear(), 2, 30);
  if (today.getMonth() == 2 && today.getDate() > 30) {
    fallSem.setFullYear(fallSem.getFullYear() + 1);
  }
  let one_day = 1000 * 60 * 60 * 24;
  return Math.ceil((fallSem.getTime() - today.getTime()) / one_day);
}



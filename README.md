# hcal

#### Simple javascript calendar

This Calendar class generates a calendar HTML, now you can append or insert this anywhere in the body.

### Usage
    
    // HTML
    <div id="hcal"></div>

    // Javascript
    var cal = new hcal(); //For current month calendar
    or
    var cal = new hcal({month: 0, year: 2012}); //For January of 2012 calendar
    var calEle = document.getElementById('hcal');
    calEle.innerHTML = cal.generateHTML();
    
    // Next Month
    var nextCal = new hcal(cal.nextMonth());
    calEle.innerHTML = nextCal.generateHTML();
    
    // Previous Month
    var prevCal = new hcal(cal.prevMonth());
    calEle.innerHTML = prevCal.generateHTML();



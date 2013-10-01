# hcal

#### Simple javascript calendar

This Calendar class generates a calendar HTML, now you can append or insert this anywhere in the body.

### Usage
    
    // HTML
    <div id="hcal"></div>

    // Javascript
    var cal = new hcal(); //For current month calendar
    or
    var cal = new hcal({month: 0, year: 2012}); //For January or 2012 calendar

    var calEle = document.getElementById('hcal');
    calEle.innerHTML = cal.generateHTML();



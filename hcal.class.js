function hcal(dataDate) {
    if(typeof dataDate != "object") dataDate = {};
    var month = dataDate.month;
    var year = dataDate.year;

    this.cal_current_date = new Date();
    this.cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.cal_months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.month = (isNaN(month) || month == null) ? this.cal_current_date.getMonth() : month;
    this.year  = (isNaN(year) || year == null) ? this.cal_current_date.getFullYear() : year;
    this.firstDay = new Date(this.year, this.month, 1);
    this.startingDay = this.firstDay.getDay();
    this.html = '';
    this.monthLength = this.cal_days_in_month[this.month];
    if (this.month == 1) {
        if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
            this.monthLength = 29;
        }
    };
    this.generateHTML = function(){
        var that = this;
        var monthName = that.cal_months_labels[this.month];
        var html = '<table class="hcal-table">';
        html += '<tr><th colspan="7">'+monthName +", "+this.year+'</th></tr>';
        html += '<tr class="hcal-header">';
        for (var i = 0; i <= 6; i++ ){
            html += '<td class="hcal-header-day">'+that.cal_days_labels[i]+'</td>';
        }
        html += '</tr>';
        html += '<tr>';
        for(var i = 1; i <= (that.monthLength+that.startingDay > 35 ? 42 : 35); i++){
            var date = (i-that.startingDay > 0 && i-that.startingDay <= that.monthLength ? i-that.startingDay : false);
            html += '<td data-hcal-date="'+(date || '')+'" data-hcal-month="'+that.month+'" data-hcal-year="'+that.year+'" class="'+(date?'blank':'')+'">'+(date || '&nbsp;')+'</td>';
            if(i%7 == 0) html += '</tr><tr>';
        }
        html += '</tr>';
        return html;
    };
    this.nextMonth = function(){
        var month = this.month + 1;
        var year = this.year;
        if(month > 11){
            month = 0;
            year = year+1;
        }else if(month < 0){
            month = 11;
            year = year-1;
        }
        return {
            'month': month,
            'year': year
        }
    };
    this.prevMonth = function(){
        var month = this.month - 1;
        var year = this.year;
        if(month > 11){
            month = 0;
            year = year+1;
        }else if(month < 0){
            month = 11;
            year = year-1;
        }
        return {
            'month': month,
            'year': year
        }
    };
}

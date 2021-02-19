function shiftset() {
    var spreadsheet = SpreadsheetApp.openById("1eXLp8JhAJKDKAq01yTOgh_61GbtllMnhihSIpmMt3-s");
    var sheet = spreadsheet.getSheetByName("3月(光通信)  ");
    
    var month = new Date().getMonth()+1;
    var year = new Date().getFullYear();
    var lastday = new Date(year,month,0);

    console.log(year);
    console.log(month);
    console.log(lastday);


    var values = sheet.getRange(4,5,1,30).getValues();

    console.log(values);

    // for(var i = 1;i<lastday;i++){

    // }
        
    
    
}
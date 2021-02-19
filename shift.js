function shiftset() {
    var spreadsheet = SpreadsheetApp.openById("1eXLp8JhAJKDKAq01yTOgh_61GbtllMnhihSIpmMt3-s");
    var sheet = spreadsheet.getSheetByName("2月(光通信) ");
    
    var month = new Date().getMonth()+1;
    var year = new Date().getFullYear();
    var lastday = new Date(year,month,0).getDate();

    console.log(year);
    console.log(month);
    console.log(lastday);


    var values = sheet.getRange(23,5,1,lastday).getValues();

    console.log(values);

   for(var i = 0;i<lastday;i++){
     console.log(values[0][i]);
     
  }
        
    
    
}
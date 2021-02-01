function autoCopySet() {

    //その月が何wあるかどうか→i<=「5」←ここの数字を書き換える---
      for(var i=1; i<=5;i++){
    //-----------------------------
  
  
          var spreadsheet = SpreadsheetApp.openById("1-66cCwepyoemt1zJOrCXDYG3jAHXcIZhY4NQ4kVGRKY");
          var sheet = spreadsheet.getSheetByName("フォーマット");
          var newSheet = sheet.copyTo(spreadsheet);
  
  
          //--何月か　→("『3月』←ここの数字を書き換え　　"+i+"w")-----
          newSheet.setName("3月"+i+"w");
          newSheet.getRange(1,2).setValue("3m"+i+"w");
          //--------------------
  
  
          spreadsheet.setActiveSheet(newSheet);
          spreadsheet.moveActiveSheet(1);
          }
          
          
  }

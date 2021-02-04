function autoCopySet() {

      for(var i=1,j=0; i <=5;i++,j++){

          var spreadsheet = SpreadsheetApp.openById("1-66cCwepyoemt1zJOrCXDYG3jAHXcIZhY4NQ4kVGRKY");
          var sheet = spreadsheet.getSheetByName("フォーマット");
          var newSheet = sheet.copyTo(spreadsheet);
         
          var ary = ['日','月','火','水','木','金','土'];
          var date = new Date();
          
          var year = date.getFullYear();
          var month = date.getMonth()+1; 
          var firstday = new Date(year,month,1);
          var first = firstday.getDate();
          var weekNum = firstday.getDay();
          var week = ary[weekNum];
          var lastday = new Date(year, month, 0).getDate();

          newSheet.setName(+month+"月"+i+"w");
          newSheet.getRange(1,2).setValue(+month+"m"+i+"w");

          newSheet.getRange(168,5).setValue(year);
          newSheet.getRange(168,6).setValue(month);
          newSheet.getRange(168,7).setValue(first);
          newSheet.getRange(168,8).setValue(week);
          newSheet.getRange(168,9).setValue(i);
          newSheet.getRange(168,9).setValue(lastday);

          var name = month+"月"+j+"w";
          
        if(i!==1){
            newSheet.getRange(64,2).setValue("="+name+"!B154+1");
            newSheet.getRange(79,2).setValue("=B64+1");
            newSheet.getRange(94,2).setValue("=B79+1");
            newSheet.getRange(109,2).setValue("=B94+1");
            newSheet.getRange(124,2).setValue("=B109+1");
            newSheet.getRange(139,2).setValue("=B124+1");
            newSheet.getRange(154,2).setValue("=B139+1");
        }else{
          switch(week){
            case "月":
              newSheet.getRange(64,2).setValue(first);
              newSheet.getRange(79,2).setValue("=B64+1");
              newSheet.getRange(94,2).setValue("=B79+1");
              newSheet.getRange(109,2).setValue("=B94+1");
              newSheet.getRange(124,2).setValue("=B109+1");
              newSheet.getRange(139,2).setValue("=B124+1");
              newSheet.getRange(154,2).setValue("=B139+1");

              break;

            case "火":
                
              newSheet.getRange(79,2).setValue(first);
              newSheet.getRange(94,2).setValue("=B79+1");
              newSheet.getRange(109,2).setValue("=B94+1");
              newSheet.getRange(124,2).setValue("=B109+1");
              newSheet.getRange(139,2).setValue("=B124+1");
              newSheet.getRange(154,2).setValue("=B139+1");
  
             break;

            case "水":

              newSheet.getRange(94,2).setValue(first);
              newSheet.getRange(109,2).setValue("=B94+1");
              newSheet.getRange(124,2).setValue("=B109+1");
              newSheet.getRange(139,2).setValue("=B124+1");
              newSheet.getRange(154,2).setValue("=B139+1");
    
              break;

            case "木":

              newSheet.getRange(109,2).setValue(first);
              newSheet.getRange(124,2).setValue("=B109+1");
              newSheet.getRange(139,2).setValue("=B124+1");
              newSheet.getRange(154,2).setValue("=B139+1");
      
              break;

            case "金":

              newSheet.getRange(124,2).setValue(first);
              newSheet.getRange(139,2).setValue("=B124+1");
              newSheet.getRange(154,2).setValue("=B139+1");
        
              break;

            case "土":

              newSheet.getRange(139,2).setValue(first);
              newSheet.getRange(154,2).setValue("=B139+1");
          
              break;

            case "日":

              newSheet.getRange(154,2).setValue(first);
            
            break;
      
                default:

          }

        }
  
          spreadsheet.setActiveSheet(newSheet);
          spreadsheet.moveActiveSheet(1);

          var aaa =  newSheet.getRange(64,2).getValue();
          var bbb = newSheet.getRange(79,2).getValue();
          var ccc = newSheet.getRange(94,2).getValue();
          var ddd = newSheet.getRange(109,2).getValue();
          var eee = newSheet.getRange(124,2).getValue();
          var fff = newSheet.getRange(139,2).getValue();
          var ggg = newSheet.getRange(154,2).getValue();

          if(lastday<aaa){
            spreadsheet.deleteSheet(newSheet);
          }else if(lastday<bbb){
            bbb = 0;
          }else if(lastday<ccc){
            ccc = 0;
          }else if(lastday<ddd){
            ddd = 0;
          }else if(lastday<eee){
            eee = 0;
          }else if(lastday<fff){
            eee = 0;
          }else if(lastday<ggg){
            fff = 0;
          }
          
          }
          
          
  }

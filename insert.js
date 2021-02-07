function insertLastUpdated() {
    //シートを取得
    var sheet = SpreadsheetApp.getActiveSheet();
   //行番号取得
   var currentRow = sheet.getActiveCell().getRow();
  
    if(currentRow>1){
     //タスクID入力
     if(currentRow > 100){
       sheet.getRange('E' + currentRow.toString()).setValue("顧客-" + (currentRow - 1).toString());
     }
     else if(currentRow > 10){
       sheet.getRange('E' + currentRow.toString()).setValue("顧客-0" + (currentRow - 1).toString());
     }
     else if(currentRow <= 10){
       sheet.getRange('E' + currentRow.toString()).setValue("顧客-00" + (currentRow - 1).toString());
     }
     
     //更新日入力
     sheet.getRange('F' + currentRow.toString()).setValue(new Date());
  
      var last_row = sheet.getLastRow();　// 最後の行を取得
      console.log(last_row)
      // sheet.getRange('A'+ last_row).setValue("=SUM(A2:A"+last_row+")");
  
  
   }
  } 
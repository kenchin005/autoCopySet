function jouzan() {
    var spread = SpreadsheetApp.getActiveSheet();

    for(var i = 4;i<=32;i++){
        var array = [];
        

       
        for(var j=2;j<=42;j++){
        var dayValues = spread.getRange(j,i).getValue();
        var point = spread.getRange(j,3).getValue();
        if(dayValues==="toku"){
            dayValues = 1;
            point = point/2;
        }
        var daypoint = dayValues*point;
   
        array.push(daypoint);
        console.log(dayValues);
        console.log(point);
        console.log(daypoint);
        console.log(array);
        }
    
    
        //  配列足す
        var total = array.reduce((sum, element) => sum + element, 0);
        console.log(total);
        // セットvalue
        var set = spread.getRange(43,i).setValue(total);
        console.log(set);
        
     

    }

}
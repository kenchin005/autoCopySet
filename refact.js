function jouzan() {
    var spread = SpreadsheetApp.getActiveSheet();

    
    var pointData = spread.getRange(6,3,41,1).getValues();



    for(var i = 4;i<35;i++){
        var array = [];
        var dayData = spread.getRange(6,i,41,1).getValues();

       
        for(var j=0;j<41;j++){

        var dayValues = dayData[j][0];
            // if(){

            // }


        var point = pointData[j][0]
        if(dayValues==="toku"){
            dayValues = 1;
            point = point/2;
        }
        var daypoint = dayValues*point;
   
        array.push(daypoint);

        }
    
    
        //  配列足す
        var total = array.reduce((sum, element) => sum + element, 0);
        console.log(total);
        // セットvalue
        var set = spread.getRange(2,i).setValue(total);
        console.log(set);
        
     

    }

}
const arr=[1,2,999,56,"mithun",1432,"pw"];
for (let i = 0; i < arr.length; i++) {
    let ele=arr[i];
    if(typeof(ele)==typeof("")){
        console.log(" Found The First String : " + ele);
        break;
    }
    
}
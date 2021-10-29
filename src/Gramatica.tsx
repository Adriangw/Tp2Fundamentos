//(A → B−A−B)
//(B → A+B+A)
const gRsierpinski = (iter:number):string => {

    var A:string = 'B-A-B';
    var B:string = 'A+B+A';
    var p1:string = A;
    var p2:string ='';
    var p3:string ='';
    var result:string ='';

    for (var i = 0; i < iter; i++) {
        if(i>0)p1=result;
        p1=p1.replaceAll('A',`A${i}`);
        p2= B.replaceAll('A',`A${(i+1)}`);
        p3=p1.replaceAll('B',p2);
        result=p3.replaceAll(`A${i}`,A);
        result=result.replaceAll(`A${(i+1)}`,'A');
    }  
  
    return result;

}

export default gRsierpinski

//(A → B−A−B)
//(B → A+B+A)

const gRsierpinski = (iter:number):string => {

    var A:string = 'B-A-B';
    var B:string = 'A+B+A';
    var p1:string = A;
    var p2:string ='';
    var result:string ='B-A-B';

    for (var i=0; i<iter; i++) {
        p1=result;
        p1=p1.replaceAll('A',`A${i}`);
        p2=p1.replaceAll('B',B);
        result=p2.replaceAll(`A${i}`,A);
    }  
  
    return result;

}

export default gRsierpinski
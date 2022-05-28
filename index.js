// class Count {
//     constructor(limit) {
//         this.limit = limit;
//     }
//     [Symbol.iterator]() {
//         let count = 1,
//             limit = this.limit;
//         return {
//             next() {
//                 if (count <= limit) {
//                     return { done: false, value: count++ };
//                 } else {
//                     return { done: true, value: undefined };
//                 }
//             },
//             return(){
//                 console.log('fuck');
//                 return {done:true}
//             }
//         }
//     }
// }


// let count = new Count(3);
// for (item of count) {
//     if(item>2)break;
//     console.log(item);
// }
// for (item of count) {
//     console.log(item);
// }

let obj = {
    a: 1,
    b: 1,
    [Symbol.iterator]() {
        let limit = Object.keys(this).length;
        let p = Object.keys(this);
        let count = 0;
        return {
            next() {
                if(count<limit)
                return {done:false,value:p[count++]};
                else
                return {done:true,value:undefined};
            }
        }
    }
};

for (item of obj) {
    console.log(item,obj[item]);
}




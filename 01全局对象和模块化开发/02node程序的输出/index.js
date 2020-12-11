/**
 * 清空打印：console.clear()
 * 打印函数的调用栈：console.trace()
 */

 console.log(1);
 console.log(2);
 console.log(3);
 console.log(4);
 console.clear()
 console.log(5);

 /**
  * 上述代码会将console.clear()上面的代码打印在控制台清空，控制台只保留console.clear()下面代码的打印
  */
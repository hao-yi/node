/**
 * 给node传递参数：node index.js smstdent age=18
 * node进程：process: {
 *             argv: 存储着给node传递得参数: [
 *                'smstdent',
 *                'age=18'
 *             ]
 *           }
 */

 /**
  * argv 是一个数组，可以通过索引或者遍历得方式拿取数组里面得元素
  */
console.log(process);
process.argv.forEach(item => {
  console.log(item);
});
let argv1 = process.argv[0];
let argv2 = process.argv[1];
let argv3 = process.argv[2];
let argv4 = process.argv[3];
console.log(argv1);
console.log(argv2);
console.log(argv3);
console.log(argv4);
setInterval(() => {
  console.log('setInterval');
}, 1000);
setTimeout(() => {
  console.log('setTimeout');
}, 1000);
process.nextTick(() => {
  console.log('下一帧');
});
setImmediate(() => {
  console.log('立即执行');
})
  
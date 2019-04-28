/**
 * 快速排序
 */
const QuickSort = (array) => {
  if (array.length <= 1) { return array; } // 数组长度≤1，则直接返回
  const middleIndex = Math.floor(array.length / 2); // 找到中间位置
  const middleNumber = array[middleIndex]; // 中间位置值大小
  const leftArray = []; // 左边数组
  const rightArray = []; // 右边数组
  // 循环数组，判断是否大于中间值，大于放右边，否则放左边
  for (let i = 0; i < array.length; i += 1) {
    if (i !== middleIndex) {
      const val = array[i]; // 当前位置值
      if (val > middleNumber) { // 大于放右边
        rightArray.push(val);
      } else { // 否则放左边
        leftArray.push(val);
      }
    }
  }
  // 左、右数组排序后合并
  return QuickSort(leftArray).concat([middleNumber], QuickSort(rightArray));
};

console.info(QuickSort([11, 3, 4, 66, 10, 2, 5, 7, 3]));

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // 1 is max to min
  // 2 and 3 are min to max
  const col1_len = collection_1.length;
  const col2_len = collection_2.length;
  const col3_len = collection_3.length;

  const ans: number[] = [];

  let i = col1_len - 1; // 1
  let j = 0; // 2
  let k = 0; // 3

  while (i >= 0 || j < col2_len || k < col3_len) {
    // prevent out of bound
    const val1 = collection_1[i] ?? Infinity;
    const val2 = collection_2[j] ?? Infinity;
    const val3 = collection_3[k] ?? Infinity;

    if (val1 <= val2 && val1 <= val3) {
      ans.push(val1);
      i--;
    } else if (val2 <= val1 && val2 <= val3) {
      ans.push(val2);
      j++;
    } else {
      ans.push(val3);
      k++;
    }
  }

  return ans;
}

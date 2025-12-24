import { merge } from "./merge";

describe("merge function", () => {
  test("normal case should be correct", () => {
    const collection_1 = [9, 7, 5, 3, 1];
    const collection_2 = [2, 4, 6, 8];
    const collection_3 = [0, 10, 11];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  test("Empty array should be correct", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1], [], [0])).toEqual([0, 1]);
    expect(merge([3, 2, 1], [], [0, 4])).toEqual([0, 1, 2, 3, 4]);
  });
});

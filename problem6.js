 /* Bài 6

Cho một mảng số nguyên `nums` và một số nguyên `target`, hãy trả về các chỉ số của hai số sao cho tổng của chúng là `target`.

Ví dụ **1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

```

Ví dụ **2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]

```

Ví dụ 3:
 Input: nums = [3,3], target = 6
 Output: [0,1]
 */

 class Solution {
    public int[] twoSum(int[] nums, int target) {
       int[] res = new int[2];
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                 if (nums[i] + nums[j] == target){
                  res[0] = i;
                  res[1] = j;
                }
            }
        }
   
        return res;
    }
}``
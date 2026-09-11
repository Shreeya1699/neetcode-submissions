class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;      // 3
        let cols = matrix[0].length;    

        let left = 0;
        let right = rows * cols - 1;

        while(left<=right){
            let mid = Math.floor((left + right) / 2);
            let row = Math.floor(mid/cols);
            let col = mid % cols;

            let val = matrix[row][col];
            if(val === target){
                return true;
            }
            if(val > target){
                right = mid -1;
            }else {
                left = mid+1;
            }

        }
        return false;
    }
}

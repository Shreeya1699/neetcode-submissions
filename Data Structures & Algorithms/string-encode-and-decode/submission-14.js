class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let parts= [];
        let result='';
        if(strs.length === 0){
            return "";
        }
        strs.forEach((st)=>{parts.push(st.length)});
        result = String([...[strs.length],parts,'%#ID#%',strs]);
        // console.log(result);

    return result;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        if(str === ""){
            return [];
        }
        
        const parts = str.split(',');
        const len = parts[0];
        if(len === 0){
            return [""];
        }

        const pattern = '%#ID#%';
        const sliceAt = str.indexOf(pattern) + 6;
        const orgStr = str.slice(sliceAt + 1);
        let count =0;

        for(let i =0; i<len; i++){
            result.push(orgStr.slice(count, count + Number(parts[i+1])));
            count += Number(parts[i+1])+1;
        };
        return result;
        
    }
}

/*
str = ["Hey", "Shreeya", "I am"]
parts = [3,7,4]
result = 

*/
function countUniqueValues(sortedArray) {
	if (!sortedArray.length) return 0;

	let count = 0;
    let left = 0;
    
    for(let i = 0; i < sortedArray.length ; i++){
        if(sortedArray[left] !== sortedArray[i]){
            count++
            sortedArray[left] = sortedArray[i]
        }
    }

    return count+1

}
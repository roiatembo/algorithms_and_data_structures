function findIndicesSumGiven(array,targetValue) {
	const hashTable = {}
	let neededValue;
	for(let i=0;i<array.length;i++) {
		neededValue = targetValue - array[i];
		if(neededValue in hashTable) {
			return [i,hashTable[neededValue]];
		}else{
			hashTable[array[i]]=i;
		}
	}
	return[];
}

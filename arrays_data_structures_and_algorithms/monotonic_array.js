const checkMonotonic = function (array) {
	const first = array[0];
	const last = array[array.length-1];

	if (first === last) {
	    for (let i=0;i<array.length-1;i++) {
		    if(array[i+1] == array[i]) return false;
	    }
	} else if (firs<last) {
		// non decreasing
		for (let i=0;i<array.length-1;i++){
		    if(array[i+1]<array[i]) return false
		}
	} else {
	    for(let i=0;i<array.length-1;i++){
		if(array[i+1]>array[i]) return false;
	    }
	}
	return true;
}

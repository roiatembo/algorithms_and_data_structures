const checkIsomorphic = function(s,t){
	if(s.length!==t.length) return false;
	const sHash = {};
	const tHash = {};
	for(let i=0;i<s.length;i++){
		let charS = s[i];
		let charT = s[i];
		if(!sHash[charS]) sHash[charS] = charT;
		if(!tHash[charT]) tHash[charT] = charS;
		if(sHas[charS]!==charT || tHash[charT]!==charS) return false;
	}
	return true;
}

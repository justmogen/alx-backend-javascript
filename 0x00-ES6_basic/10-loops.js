export default function appendToEachArrayValue(array, appendString) {
	const newArray = array;

	for (const value of array) {
    	let idx = array.indexOf(value);
    	newArray[idx] = appendString + value;
  	}

  	return array;
}

// Javascript code to implement the approach
function isEqual(a, b, n, m)
{

	// If size is not same return false
	if (n != m) {
		return false;
	}

	// Create 2 unordered maps to store
	// the frequency
	let mp1 = new Map();
	let mp2 = new Map();
	for (let i of a) {
		if (mp1.get(i) != null)
			mp1.set(i, mp1.get(i) + 1);
		else
			mp1.set(i, 1);
	}
	for (let i of b) {
		if (mp2.get(i) != null)
			mp2.set(i, mp2.get(i) + 1);
		else
			mp2.set(i, 1);
	}

	// Compare the frequency
	for (let i of mp1.keys()) {
		// If frequency not same return false
		if (mp2.get(i) != mp1.get(i)) {
			return false;
		}
	}
	return true;
}

module.exports = isEqual;

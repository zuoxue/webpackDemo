import _ from 'lodash';

export function getResult(collection) {
	return _.partition(collection, n => n % 2);
}

console.log(getResult([1, 2, 3, 4]));

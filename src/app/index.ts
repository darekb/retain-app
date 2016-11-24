import * as services from './services';
export { App } from './app';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
	...mapValuesToArray(services)
]

/*

var mapValuesToArray = function (obj) { 
	return Object.keys(obj).map(function (key) { 
		return obj[key]; 
	}); 
};

var test = {
	'one':1,
	'two': 2,
	'three': 3
}
mapValuesToArray(test);

*/

const D1P1_fs = require('node:fs/promises');

let D1P1_fileData = '';
const D1P1_leftList: number[] = [];
const D1P1_rightList: number[] = [];
const D1P1_differences: number[] = [];
let D1P1_result: number = 0;

//execution
D1P1_main()

async function D1P1_main() {
	await D1P1_readFile()
	D1P1_getLists()
	D1P1_orderLists()
	D1P1_mergeLists()
	D1P1_addUpAllDifferences()
}

//read txt file

async function D1P1_readFile() {
	try {
		D1P1_fileData = await D1P1_fs.readFile('./input.txt', 'utf8');
		console.log('filled Filedata');
	} catch (err) {
		console.error(err);
	}
}

//get the 2 lists

function D1P1_getLists() {
	// Split by newlines first
	const lines = D1P1_fileData.trim().split('\n');

	// Process each line
	for (const line of lines) {
		// Split each line by whitespace and filter out empty strings
		const numbers = line.trim().split(/\s+/);

		// Add numbers to respective lists
		if (numbers.length >= 2) {
			D1P1_leftList.push(Number(numbers[0]));
			D1P1_rightList.push(Number(numbers[1]));
		}
	}

	console.log('Left list:', D1P1_leftList);
	console.log('Right list:', D1P1_rightList);
}

//order list of numbers

function D1P1_orderLists() {
	D1P1_leftList.sort((a, b) => a - b)
	D1P1_rightList.sort((a, b) => a - b)

	console.log('Ordered Left list:', D1P1_leftList)
	console.log('Ordered Right list:', D1P1_rightList)
}

//add up smallest numbers

function D1P1_mergeLists() {
	D1P1_leftList.forEach((leftElement, index) => {
		let difference = 0;
		if (leftElement > D1P1_rightList[index]) {
			difference = leftElement - D1P1_rightList[index];
		}
		else if (leftElement < D1P1_rightList[index]) {
			difference = D1P1_rightList[index] - leftElement;
		}
		D1P1_differences.push(difference)
	});

	console.log('merged list values:', D1P1_differences)
}

function D1P1_addUpAllDifferences() {
	D1P1_differences.forEach((value) => {
		D1P1_result += value;
	})
	console.log('the final result: ', D1P1_result)
}
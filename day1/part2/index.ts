
const D1P2_fs = require('node:fs/promises');

let D1P2_fileData = '';
const D1P2_leftList: number[] = [];
const D1P2_rightList: number[] = [];
const D1P2_differences: number[] = [];
let D1P2_result: number = 0;

//execution
D1P2_main()

async function D1P2_main() {
	await D1P2_readFile()
	D1P2_getLists()
	D1P2_findSimilarities()
	D1P2_addUpAllDifferences()
}

//read txt file

async function D1P2_readFile() {
	try {
		D1P2_fileData = await D1P2_fs.readFile('./input.txt', 'utf8');
		console.log('filled Filedata');
	} catch (err) {
		console.error(err);
	}
}

//get the 2 lists

function D1P2_getLists() {
	// Split by newlines first
	const lines = D1P2_fileData.trim().split('\n');

	// Process each line
	for (const line of lines) {
		// Split each line by whitespace and filter out empty strings
		const numbers = line.trim().split(/\s+/);

		// Add numbers to respective lists
		if (numbers.length >= 2) {
			D1P2_leftList.push(Number(numbers[0]));
			D1P2_rightList.push(Number(numbers[1]));
		}
	}

	console.log('Left list:', D1P2_leftList);
	console.log('Right list:', D1P2_rightList);
}

//add up smallest numbers

function D1P2_findSimilarities() {
	D1P2_leftList.forEach((leftElement, index) => {
		const similarityValue: number[] = D1P2_rightList.filter(x => x === leftElement)
		D1P2_differences.push(leftElement * similarityValue.length)
	});

	console.log('merged list values:', D1P2_differences)
}

function D1P2_addUpAllDifferences() {
	D1P2_differences.forEach((value) => {
		D1P2_result += value;
	})
	console.log('the final result: ', D1P2_result)
}
const test   = require('node:test');
const assert = require('node:assert/strict');
const Tuple  = require('./Tuple');
const tests  = [];

tests.push(test('toString Tag Test', t => {
	const tuple = Tuple();

	assert.strictEqual('[object Tuple]', String(tuple));
}));

tests.push(test('Null Tuple Test', t => {
	const tuple = Tuple();

	assert.strictEqual(Tuple(), Tuple());
}));

tests.push(test('Identical Primitive Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const numbers = Array(i).fill(0).map((_,k) => k);

		const numbersA = numbers.slice();
		const numbersB = numbers.slice();

		assert.strictEqual(Tuple(...numbersA), Tuple(...numbersB));
	}
}));

tests.push(test('Non Identical Primitive Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const numbers = Array(i).fill(0).map((_,k) => k);

		const numbersA = numbers.slice();
		const numbersB = numbers.slice();

		numbersB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...numbersA), Tuple(...numbersB));
	}
}));

tests.push(test('Null vs Undefined', t => {
	assert.notEqual(Tuple(null), Tuple(void 0));
}));

tests.push(test('Identical Object Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const objects = Array(i).fill(0).map((_,k) => ({}));
		const objectsA = objects.slice();
		const objectsB = objects.slice();

		assert.strictEqual(Tuple(...objectsA), Tuple(...objectsB));
	}
}));

tests.push(test('Non Identical Object Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const objects = Array(i).fill(0).map((_,k) => ({}));
		const objectsA = objects.slice();
		const objectsB = objects.slice();

		objectsB[ Math.trunc(i/2) ] = {};

		assert.notEqual(Tuple(...objectsA), Tuple(...objectsB));
	}
}));

tests.push(test('Identical Interpolated 2 Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 2 ? {[k]:k} : k );
		const mixedA = mixed.slice();
		const mixedB = mixed.slice();

		assert.strictEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 2 ? k : {} );
		const mixedA = mixed.slice();
		const mixedB = mixed.slice();

		assert.strictEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
}));

tests.push(test('Non Identical Interpolated 2 Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 2 ? {[k]:k} : k );
		const mixedA = mixed.slice(0);
		const mixedB = mixed.slice(0);

		mixedB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
	}

	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 2 ? k : {[k]:k} );
		const mixedA = mixed.slice(0);
		const mixedB = mixed.slice(0);

		mixedB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
}));

tests.push(test('Identical Interpolated 3 Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 3 ? {[k]:k} : k );
		const mixedA = mixed.slice();
		const mixedB = mixed.slice();

		assert.strictEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 3 ? k : {} );
		const mixedA = mixed.slice();
		const mixedB = mixed.slice();

		assert.strictEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
}));

tests.push(test('Non Identical Interpolated 3 Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 3 ? {[k]:k} : k );
		const mixedA = mixed.slice(0);
		const mixedB = mixed.slice(0);

		mixedB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
	}

	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 3 ? k : {[k]:k} );
		const mixedA = mixed.slice(0);
		const mixedB = mixed.slice(0);

		mixedB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
}));

tests.push(test('Identical Interpolated 4 Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 4 ? {[k]:k} : k );
		const mixedA = mixed.slice();
		const mixedB = mixed.slice();

		assert.strictEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 4 ? k : {} );
		const mixedA = mixed.slice();
		const mixedB = mixed.slice();

		assert.strictEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
}));

tests.push(test('Non Identical Interpolated 4 Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 4 ? {[k]:k} : k );
		const mixedA = mixed.slice(0);
		const mixedB = mixed.slice(0);

		mixedB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
	}

	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 4 ? k : {[k]:k} );
		const mixedA = mixed.slice(0);
		const mixedB = mixed.slice(0);

		mixedB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
}));

tests.push(test('Identical Interpolated 5 Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 5 ? {[k]:k} : k );
		const mixedA = mixed.slice();
		const mixedB = mixed.slice();

		assert.strictEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 5 ? k : {} );
		const mixedA = mixed.slice();
		const mixedB = mixed.slice();

		assert.strictEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
}));

tests.push(test('Non Identical Interpolated 5 Test', t => {
	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 5 ? {[k]:k} : k );
		const mixedA = mixed.slice(0);
		const mixedB = mixed.slice(0);

		mixedB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
	}

	for(let i = 1; i < 100; i++)
	{
		const mixed = Array(i).fill(0).map((_,k) => k % 5 ? k : {[k]:k} );
		const mixedA = mixed.slice(0);
		const mixedB = mixed.slice(0);

		mixedB[ Math.trunc(i/2) ] = 'CHANGED';

		assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
	}
}));

tests.push(test('Scalar Subset Test', t => {
	const numbers  = Array(100).fill(0).map((_,k) => ({}));
	const numbersA = numbers.slice();
	for(let i = 1; i < 100; i++)
	{
		const numbersB = numbers.slice(0,i);
		assert.notEqual(Tuple(...numbersA), Tuple(...numbersB));
	}
}));

tests.push(test('Object Subset Test', t => {
	const objects  = Array(100).fill(0).map((_,k) => ({}));
	const objectsA = objects.slice();
	for(let i = 1; i < 100; i++)
	{
		const objectsB = objects.slice(0,i);
		assert.notEqual(Tuple(...objectsA), Tuple(...objectsB));
	}
}));

tests.push(test('Interpolated 2 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 2 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 2 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
}));

tests.push(test('Interpolated 3 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 3 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 3 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
}));

tests.push(test('Interpolated 4 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 4 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 4 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
}));

tests.push(test('Switched Scalar Subset Test', t => {
	const numbers  = Array(100).fill(0).map((_,k) => ({}));
	const numbersA = numbers.slice();
		for(let i = 1; i < 100; i++)
	{
		const numbersB = numbers.slice(0,i);
		assert.notEqual(Tuple(...numbersB), Tuple(...numbersA));
	}
}));

tests.push(test('Switched Object Subset Test', t => {
	const objects  = Array(100).fill(0).map((_,k) => ({}));
	const objectsA = objects.slice();
		for(let i = 1; i < 100; i++)
	{
		const objectsB = objects.slice(0,i);
		assert.notEqual(Tuple(...objectsB), Tuple(...objectsA));
	}
}));

tests.push(test('Switched Interpolated 2 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 2 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 2 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
}));

tests.push(test('Switched Interpolated 3 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 3 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 3 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
}));

tests.push(test('Switched Interpolated 4 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 4 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 4 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
}));

tests.push(test('Changed Scalar Subset Test', t => {
	const numbers  = Array(100).fill(0).map((_,k) => ({}));
	const numbersA = numbers.slice();
	for(let i = 1; i < 100; i++)
	{
		const numbersB = numbers.slice(0,i);
		numbersB[ Math.trunc(i/2) ] = 'CHANGED';
		assert.notEqual(Tuple(...numbersA), Tuple(...numbersB));
	}
}));

tests.push(test('Changed Object Subset Test', t => {
	const objects  = Array(100).fill(0).map((_,k) => ({}));
	const objectsA = objects.slice();
	for(let i = 1; i < 100; i++)
	{
		const objectsB = objects.slice(0,i);
		objectsB[ Math.trunc(i/2) ] = 'CHANGED';
		assert.notEqual(Tuple(...objectsA), Tuple(...objectsB));
	}
}));

tests.push(test('Changed Interpolated 2 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 2 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 2 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
}));

tests.push(test('Changed Interpolated 3 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 3 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 3 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
}));

tests.push(test('Changed Interpolated 4 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 4 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 4 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedA), Tuple(...mixedB));
		}
	}
}));

tests.push(test('Switched Changed Scalar Subset Test', t => {
	const numbers  = Array(100).fill(0).map((_,k) => ({}));
	const numbersA = numbers.slice();
	for(let i = 1; i < 100; i++)
	{
		const numbersB = numbers.slice(0,i);
		numbersB[ Math.trunc(i/2) ] = 'CHANGED';
		assert.notEqual(Tuple(...numbersB), Tuple(...numbersA));
	}
}));

tests.push(test('Switched Changed Object Subset Test', t => {
	const objects  = Array(100).fill(0).map((_,k) => ({}));
	const objectsA = objects.slice();
	for(let i = 1; i < 100; i++)
	{
		const objectsB = objects.slice(0,i);
		objectsB[ Math.trunc(i/2) ] = 'CHANGED';
		assert.notEqual(Tuple(...objectsB), Tuple(...objectsA));
	}
}));

tests.push(test('Switched Changed Interpolated 2 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 2 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 2 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
}));

tests.push(test('Switched Changed Interpolated 3 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 3 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 3 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
}));

tests.push(test('Switched Changed Interpolated 4 Subset Test', t => {
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 4 ? {[k]:k} : k );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
	{
		const mixed = Array(100).fill(0).map((_,k) => k % 4 ? k : {[k]:k} );
		const mixedA = mixed.slice();

		for(let i = 1; i < 100; i++)
		{
			const mixedB = mixed.slice(0,i);
			mixedB[ Math.trunc(i/2) ] = 'CHANGED';
			assert.notEqual(Tuple(...mixedB), Tuple(...mixedA));
		}
	}
}));

Promise.allSettled(tests).then(() => {
	const lastTest = () => test(`Ensure memory isn\'t leaking for scalar keys`, t => {
		assert.strictEqual(0, Tuple.scalarsCached);
	});
	setTimeout(lastTest, 150);
});

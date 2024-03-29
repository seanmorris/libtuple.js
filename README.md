# libtuple.js
*Memory-efficient tuple implementation in 2.2kB*

### Install with NPM

```bash
$ npm install libtuple
```

## Usage

Import `Tuple` with `require`:
```javascript
const Tuple = require('libtuple/Tuple');
````

Pass a list of values to the `Tuple()` function:
```javascript
const tuple123 = Tuple(1, 2, 3);
````

This value will be strictly equivalent to any tuple generated with the same values:
```javascript
tuple123 === Tuple(1, 2, 3); // true
````

This is true for tuples with objects as well:
```javascript
const a = {};
const b = [];
const c = new Date;

console.log( Tuple(a, b, c, 1, 2, 3) === Tuple(a, b, c, 1, 2, 3) ); //true
```

Watch out for the following however, object references can be tricky. In this example, each `[]` represents its own, unique object, so the following returns false:
```javascript
Tuple( [] ) === Tuple( [] ); // FALSE!!!
```

Use the same **object reference** to get the same tuple:
```javascript
const a = [];

Tuple( a ) === Tuple( a ); // true :)
```

## Tuples are...

### Composable

Tuples can be members of of other tuples. This works as expected:
```javascript
console.log( Tuple(Tuple(1, 2), Tuple(3, 4)) === Tuple(Tuple(1, 2), Tuple(3, 4)) );
// true
```

### Frozen

You cannot add, remove or modify any property on a tuple.
```javascript
const tuple = Tuple('a', 'b', 'c');

tuple[0] = 'NEW VALUE';

console.log( tuple[0] ); // 'a'

```

### Not Iterable

You can access properties like `[0]`, `[1]`, and `.length` on a tuple, but they are not arrays. You can get equivalent array values quite easily with `Array.from()`:

```javascript
const tuple = Tuple('a', 'b', 'c');

console.log( tuple[1] ) // 'b'

Array.from(tuple).map(t => console.log(t));
// 'a'
// 'b'
// 'c'
```

## How It Works

A *tuple* is a type represented by a sequence of values. Unlike arrays, where `[1,2] !== [1,2]`, since, although they hold the same values, the actual object references are different. Tuples give you `Tuple(1,2) === Tuple(1,2)`.

For a sequence of primitives, this is trivial. Simply run `JSON.stringify` on the list of values and you've got a unique scalar that you can compare against others, and the object-reference problem is gone. Once you add objects to the mix, however, things can get complicated.

Stringifying objects won't work, since given almost any stringification mechanism, two completely disparate objects can be coerced to resolve the same value. That only leaves us with bean-counting. If we keep track of which objects and scalars we've seen, we can use the unique value of the object reference itself to construct a path through a tree of `Maps` where the leaves are the ultimate scalar value of the tuple. But in that case we'll use memory to hold objects and scalars in memory long after their tuples are useful. It seems we're backed into a corner here.

We could use trees of `WeakMaps` instead, however this case would only allow us to use objects, since scalars cannot be used as keys to a `WeakMap`. We'd end up with two disparate mechanisms, one for lists of only scalars, and one for lists of only objects. We just can't win here!

And that's where prefix-trees come in. Before constructing a tree of `WeakMaps`, the function will group all neighboring scalars into singular values. This will then leave us with a list of objects interspersed by singular scalars. Each scalar is then considered the prefix of the next object. When constructing or traversing the tree, first we come upon a node representing the object, then its prefix, then the next object in the chain. If the first (or any) object has no scalar prefix, we simply move directly to the next object. If the list ends in a scalar, simply add a terminator object reference as a key to the leaf, which holds the actual tuple object.

Organizing the hierarchy with the scalar prefixes *after* the objects allows us to exploit the `WeakMap`'s garbage collection behavior. Once the object keys are GC'ed, so are the entries of the `WeakMap`. Holding a key here does not prevent objects from being GC'ed, so the branches of the internal tuple tree only stay in-memory as long as the objects they're comprised of.

## Limitations

* `Symbol`s cannot participate in `tuples`.
* ~~The library cannot tell the difference between `null` and `undefined`~~.
* ~~Purely scalar-based tuples are represented by strings, not objects.~~

## Building

libtuple is a bog-standard CJS module with a single export and relatively mundane syntax. The source is meant to be executed directly. Minification is left up the the user and their bundler.

## Testing

Run `npm run test` or `node --test test.js` in the terminal.

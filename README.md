## How It Works
```bash
npm install
```

edit the `ligma.config.js` file
```javascript
module.exports = {
    dsa: [
        "InsertionSort",
        "MergeSort",
        "Queue",
        "Stack",
        "QuickSort",
        "DijkstraList",
        "PrimsList",
    ],
}
```

create a day of katas, this will use the list in the `ligma.config.js`.
```bash
npm run generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

## Testing
```
npx test [fileName]
```

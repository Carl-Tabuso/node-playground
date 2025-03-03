import { readFile, writeFile } from 'fs';

// welcome to callback hell

console.log('start non-blocking process');

readFile('./filesystems/subdir/stupid.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err); 
    return;
  }
  console.log('done with first reading');
  const firstReadResult = data;

  readFile('./filesystems/subdir/stupid2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err); 
        return;
    }
    console.log('done with second reading');
    const secondReadResult = data;

    // create/override the file contents
    writeFile(
        './filesystems/subdir/stupid3.txt',
        'This is kinda cool', (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with first write task');
        }
    );

    // create/append the file contents
    writeFile(
        './filesystems/subdir/stupid4.txt',
        ` callback results of first read "${firstReadResult}" and second read "${secondReadResult}"`,
        { flag: 'a' },
        (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done second write task');
        }
    );
  })
})

console.log('end non-blocking process');
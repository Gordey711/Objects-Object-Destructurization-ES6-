'use strict';

// const footherOptions = {
//     name: 'hfghdetyfd',
//     width: 765435,
//     height: 57654,
//     maxWidth: 2000,
//     maxHeight: 6421,
//     size: 200,
//     fonts: 'gfhgfg',
//     border: 'green',
//     colors: {
//         border: 'black',
//         bg: 'red',
//         maxWidth: 2000,
//         maxHeight: 6421,
//     }
// };

// console.log(Object.keys(footherOptions).length);





const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


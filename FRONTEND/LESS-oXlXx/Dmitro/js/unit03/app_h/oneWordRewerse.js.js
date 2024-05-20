// const args = process.argv.slice(2).join('');

const oneWordRewerse = (args) => {
    let reversed = args.split('').reverse().join('');
    console.log(reversed);
    return reversed;
}

oneWordRewerse('Alex');
// oneWordRewerse(args);

module.export = oneWordRewerse;

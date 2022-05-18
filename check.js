var fs = require('fs');

const yargs = require('yargs');

const linebreak = `

`;

function checkFile(file) {
  console.log(`checking ${file}`);
  var array = fs
    .readFileSync(`${__dirname}/episodes/${file}`)
    .toString()
    .split(linebreak);

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const lines = element.split('\n');

    if (parseInt(lines[0]) !== i + 1) {
      console.warning(`Index out of order: ${lines[0]} - fixing`);
    }

    lines[0] = i + 1;

    const tc = lines[1];
    if (tc.length !== 29) {
      console.error(`Incorrect timestamp formatting: ${tc}`);
    }

    array[i] = lines.join('\n');
  }

  fs.writeFileSync(`${__dirname}/episodes/${file}`, array.join(linebreak));
}

const argv = yargs
  .option('file', {
    alias: 'f',
    description: 'Select file',
    type: 'string',
  })
  .help()
  .alias('help', 'h').argv;

if (argv.file && fs.existsSync(`${__dirname}/episodes/${argv.file}`)) {
  checkFile(argv.file);
} else {
  console.log('checking all files');

  const files = fs.readdirSync(`${__dirname}/episodes`, {
    withFileTypes: true,
  });

  files.map((file) => {
    if (file.isFile()) {
      checkFile(file.name);
    }
  });
}

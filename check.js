var fs = require('fs');

const yargs = require('yargs');

function checkFile(file) {
  console.log(`checking ${file}`);
  var array = fs
    .readFileSync(`${__dirname}/episodes/${file}`)
    .toString()
    .split(/\r?\n\r?\n/);

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const lines = element.split('\n').map((l) => l.trim());

    const ts = lines[1];

    if (parseInt(lines[0]) !== i + 1) {
      console.warn(`Index out of order: ${lines[0]} - fixing`);
    }

    lines[0] = i + 1;

    if (
      !/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9],[0-9][0-9][0-9] --> [0-9][0-9]:[0-9][0-9]:[0-9][0-9],[0-9][0-9][0-9]$/.test(
        ts
      )
    ) {
      console.error(`Incorrect timestamp formatting: ${ts}`);
    }
    array[i] = lines.join('\n');
  }

  fs.writeFileSync(`${__dirname}/episodes/${file}`, array.join('\n\n'));
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

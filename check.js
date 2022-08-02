var fs = require('fs');
const path = require('path');

const yargs = require('yargs');

function padZeros(t, z = 2) {
  if (z === 2) {
    return ('00' + t).slice(-2);
  }
  return ('000' + t).slice(-3);
}

function srtTimeStampFromMs(ms) {
  const hours = Math.floor(ms / 1000 / 60 / 60);
  ms = ms - hours * 1000 * 60 * 60;
  const minutes = Math.floor(ms / 1000 / 60);
  ms = ms - minutes * 1000 * 60;
  const seconds = Math.floor(ms / 1000);
  ms = ms - seconds * 1000;
  return `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(
    seconds
  )},${padZeros(ms, 3)}`;
}

function checkFile(file) {
  console.log(`checking ${file}`);

  const output = [];
  var array = fs
    .readFileSync(`${__dirname}/episodes/${file}`)
    .toString()
    .trim()
    .split(/\r?\n\r?\n/);

  const names = {};

  let addedLines = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const lines = element.split('\n').map((l) => l.trim());

    const ts = lines[1];

    lines[0] = i + 1 + addedLines;

    if (
      !/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9],[0-9][0-9][0-9] --> [0-9][0-9]:[0-9][0-9]:[0-9][0-9],[0-9][0-9][0-9]$/.test(
        ts
      )
    ) {
      console.error(`Incorrect timestamp formatting: ${ts}`);
      output.push(lines.join('\n'));
    } else {
      let [start, end] = ts.split(' --> ').map((t) => {
        const [hours, minutes, seconds, ms] = t.split(/:|,/);
        return (
          parseInt(hours) * 60 * 60 * 1000 +
          parseInt(minutes) * 60 * 1000 +
          parseInt(seconds) * 1000 +
          parseInt(ms)
        );
      });

      if (start > end) {
        end = end + (start - end) + 1;
      }

      if (lines[2].indexOf(':') !== -1) {
        const name = lines[2].split(':')[0];
        if (!names[name]) {
          names[name] = 1;
        } else {
          names[name] = names[name] + 1;
        }
      }
      let text = lines.slice(2).join(' ').split(' ');

      const textLines = [];
      const maxLength = 32;
      let curIndex = -1;
      text.forEach((word) => {
        if (
          curIndex >= 0 &&
          `${textLines[curIndex]} ${word}`.length <= maxLength
        ) {
          textLines[curIndex] = `${textLines[curIndex]} ${word}`;
        } else {
          curIndex++;
          textLines[curIndex] = word;
        }
      });

      if (textLines.length > 2) {
        const numChunks = Math.ceil(textLines.length / 2);
        const eachChunkLength = Math.floor((end - start) / numChunks);
        let curStart = start;
        let baseIndex = lines[0];
        for (let i = 0; i < numChunks; i++) {
          if (i !== 0) {
            addedLines++;
          }

          output.push(
            [
              baseIndex + i,
              `${srtTimeStampFromMs(curStart)} --> ${srtTimeStampFromMs(
                curStart + eachChunkLength
              )}`,
              ...textLines.slice(i * 2, i * 2 + 2),
            ].join('\n')
          );
          curStart = curStart + eachChunkLength;
        }
      } else {
        output.push(
          [
            lines[0],
            `${srtTimeStampFromMs(start)} --> ${srtTimeStampFromMs(end)}`,
            ...textLines,
          ].join('\n')
        );
      }
    }
  }

  const filteredNames = Object.keys(names).filter((n) => names[n] === 1);
  if (filteredNames.length) {
    console.log(`possible bad names / colon error:`);
    console.log(filteredNames.map((n) => `- ${n}`).join('\n'));
  }

  fs.writeFileSync(`${__dirname}/episodes/${file}`, output.join('\n\n'));
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
    if (file.isFile() && path.extname(file.name) === '.srt') {
      checkFile(file.name);
    }
  });
}

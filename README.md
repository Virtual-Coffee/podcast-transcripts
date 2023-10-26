# Podcast Transcripts

Transcripts for the [Virtual Coffee Podcast](https://virtualcoffee.io/podcast).

## Contributing

See our [Contributing Guide](/CONTRIBUTING.md) to get started on contributing to this repository.

## Transcription Guidelines

Check out the [Transcriptions Guidelines](/Transcriptions-Guidelines.md) for transcribing details!

## Downloading Episodes

To download the latest episodes, run the following command:

```sh
yarn download
```

## Fixing Formatting Issues

The transcripts are saved in the [SRT format](https://www.3playmedia.com/blog/create-srt-file/). This repo contains a tool to help.

```sh
yarn check-srt
```

This tool will:

- Check for invalid timestamp formatting
- Find and attempt to fix indexing issues

After running `yarn check-srt`, fix the incorrect timestamp(s) format manually, if any.

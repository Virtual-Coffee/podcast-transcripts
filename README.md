# Podcast Transcripts

Transcripts for the [Virtual Coffee Podcast](https://virtualcoffee.io/podcast)

## Transcription guidelines

Check out the [Transcriptions Guidelines](./Transcriptions-Guidelines.md) for details!

## Downloading episodes

To download the latest episodes, run the following command:

```sh
yarn download
```

## Fixing formatting issues:

The transcripts are saved in the [SRT format](https://www.3playmedia.com/blog/create-srt-file/). This repo contains a tool to help a bit.

```sh
yarn check-srt
```

This tool will:

- Check for invalid timestamp formatting
- Find and attempt to fix indexing issues

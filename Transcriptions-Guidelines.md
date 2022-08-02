# Virtual Coffee Podcast Transcriptions Guidelines

Virtual Coffee podcast transcription is transcribed **exactly** as it sounds and includes **all** the utterances of the speakers, **except** the filler words of ‘uh’ and ‘um’.

Those utterances are:

- **Speech errors**: `I went to the bank on Thursday -- no, Friday.`
- **False starts**: `Oh, I didn't -- this thing is not perfect.`
- **Filler words**: kind of, sort of, I mean, you know… (**Exception**: uh, um)
- **Slang words**: Kinda, gotta, gotcha, betcha, wanna, dunno…
- **Stutters**: `I-I bought that ch-ch-ch-chair yesterday.`
- **Repetitions**: `I went- I went to the bank last Friday.`
- **Use these forms for the affirmative/negative**:
  - Mm-hmm, Mm (affirmative) or Mm-mm (negative)
  - Uh-huh (affirmative) or Uh-uh (negative)

## Speaker labels

1. Use the full name on first reference
2. Use the speaker’s first name for the remainder of the transcription.

```text
  Bekah Hawrot Weigel: Hello, and welcome to Season 1, Episode 1 of the Virtual Coffee podcast…

  Dan Ott: Thanks, Bekah. In this episode, …

  Bekah: We start every episode of the podcast like we start every Virtual Coffee.

  Dan: Hi, I'm Dan. I'm a front-end developer…
```

## Colons

**Do not use colons (`:`) anywhere except in the timestamp and directly after the speaker label.** The way that Buzzsprout processes srt files results in errors or mis-parsed speaker names if colons are present in the text. Most times we can use an [em dash](#em-dash-).

## Paragraph

1. Keep the original one or two lines per number of a range of timestamps.
2. Make sure that there is no space after the last word of each paragraph.
3. Each section should be 4 lines (index, timestamp, and two lines of text). The [`check-srt`](https://github.com/Virtual-Coffee/podcast-transcripts#fixing-formatting-issues) command will fix these up for you as well.

```text
  812
  00:49:49,139 --> 00:49:53,519
  Dan: [Chuckles] Yeah. I'm looking forward
  to that talk.
```

## Timestamp

- Make sure to always include the three digits after comma. Write `000` if it's unknown, but make sure it's after the start time.

  `04:05:20,000 --> 04:05:21,638`

## Formatting

### Double quotations marks ("")

- Use it whenever there is a direct quotation.

  `And they told me, "You are not qualified for this role at all.”`

- Internal dialogues are seen as direct quotations.

  `And I figured, "Hey, I should go make some new friends!"`

- The punctuation at the end of quotations goes inside the quotation marks.
- When quoting, the first word of a complete sentence should be capitalized.
- Use quotation marks for book titles, movie titles, song titles, etc.

  `My favorite movie is definitely "Moana".`

### Comma (,)

- Repetition that gives emphasize to the word.

  `I really, really love that book.`

### Single dash (-)

- Stutters:

  `I-I bought that ch-ch-ch-chair yesterday.`

- Repetitions:

  `I went- I went to the bank last Friday.`

- Spelling:

  `My name is Anna, A-N-N-A.`

- Unfinished words:

  `Whenev- I can never visit them alone.`

- When the speech is interrupted in a conversation, but the speaker continues his thought:

  ```text
  Speaker 1: I thought he was-
  Speaker 2: Yeah.
  Speaker 1: -gone.
  ```

- Do not give space before and after the single dash, except for repetitions and unfinished words.
- In the case of severe stuttering, type a maximum of three stuttered sounds.

### Double dash (--)

- Use it for false starts or when there is a change of thoughts.

  `Oh, I didn't -- this thing is not perfect.`

- Speech errors:

  `I went to the bank on Thursday -- no, Friday.`

- Incomplete sentence:

  `I wanted to say something but --`

- Give space before and after the double dash.
- Use lowercase for the sentence that follows the double dash.

### Em dash –

- Use it to introduce a list or idea.

  `Multiple languages are spoken in Canada — English, French, and Native languages.`

- Use it to insert an explanation, an example, or added information in the middle of a sentence.

  `We used to own a computer when — not like when I was super young — but when I was in high school.`

- Separate words before and after em dash with a space.

[How to create em dash on Windows or Mac](https://www.techtoolsforwriters.com/how-to-create-an-em-dash/).

### Ellipsis (…)

- Use it to describe a short pause; not longer than 4 seconds.

  `Anyway, it's ... one of the things that I most proud of.`

- Separate words before and after ellipsis with a space.

### Capitalization

- The beginning of every sentence should be capitalized.
- When quoting, the first word of a complete sentence should be capitalized.
- Always research the proper capitalization `e.g., iPhone, Ruby on Rails, SaaS`.
- Always capitalize AM and PM for time `e.g., 2:45 PM, 5:00 AM`.
- Capitalize nouns followed by numbers or letters that are part of a series `e.g., Season 1, Episode 1`.
- Capitalize titles of movies, books, et cetera `e.g., “Gone With The Wind”`.
- Capitalize spelling `e.g., “My name is Anna, A-N-N-A.”`

### Non-text audio

- Sound events that are significant to the audio should also be noted by using brackets [ ].
  `e.g., [laughs] [chuckles] [giggles] [gasp]`. [Laughs] is a normal laugh; [chuckles] is a soft laugh.

- Use [crosstalk] when two speakers are talking over one another. Try to get as much from each speaker as possible.

  ```text
  Host: I think another [crosstalk] perspective is that we can learn something from it.
  Guest: Well, that’s my opinion.
  ```

  The guest interjected before the host finished, but we do not want to split the sentence into two paragraphs. Therefore, the host’s sentence is completed, and then the guest's sentence is inserted into a new paragraph.

- Use [silence] to demonstrate a short pause in speech; not less than 4 seconds but not longer than 10 seconds.

  `Anyway [silence], I think I will do that next time.`

- Use [??] for unintelligible audio after the word or sentence, when you have an idea what it says, but aren't completely sure.

  `We have an entire thread [??] in basecamp.`

- Use [unintelligible] after the word or sentence if speech can be heard but it cannot be understood due to background noise or muffled voice, or when you are not able to guess what was said.

  `Yeah, there's not really much of [unintelligible].`

## Other notes

- Do not correct grammatical errors made by the speakers.
- Strictly transcribe what the speakers actually say, except for ‘uh’ and ‘um’.
- False starts, filler, repetitive phrasing and slang should be included in the transcripts. If the speaker clearly says "cuz", then write "cuz" and not "because".
- Do not censor hosts or the guest(s). If they say “shit”, write “shit”.
- Never change spoken contractions (e.g. y’all, ain’t, don’t, can’t, it’s, et cetera.)
- Try to best guess words that are unintelligible, and use [unintelligible] when you are not able to guess it in any way.
- **When in doubt, transcribe exactly!**

---

## Resources

- [GoTranscript](https://gotranscript.com/transcription-guidelines)
- [#causeascene](https://hashtagcauseascene.com/community-transcription-guide/)
- [OneSpace](http://support.onespace.com/training-resources/transcription-style-guide)
- [Software Engineering Unlocked Podcast repo](https://github.com/mgreiler/se-unlocked/blob/master/Transcription_Guidelines.md)
- [Anecdote style](https://sites.google.com/site/anecdotestyle/style-guides/general-transcription-style-guide)
- [Punctuation Marks](https://punctuationmarks.org/em-dash/)
- [CC TRANSCRIBERS](https://cctranscribers.wordpress.com/2016/12/22/four-rules-of-verbatim-transcription/)

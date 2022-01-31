# Virtual Coffee Podcast Transcriptions Guideline

Virtual Coffee podcast transcription is transcribed **exactly** as it sounds and includes **all** the utterances of the speakers, **except** the filler words of ‘uh’ and ‘um’.

Those utterances are:

- **Speech errors**: `I went to the bank on Thursday- no, Friday.`
- **False starts**: `Oh, I didn't… this thing is not perfect.`
- **Filler words**: kind of, sort of, I mean, you know… (**Exception**: uh, um)
- **Slang words**: Kinda, gotta, gotcha, betcha, wanna, dunno…
- **Stutters**: `I-I bought that ch-ch-ch-chair yesterday.`
- **Repetitions**: `I went, I went to the bank last Friday.`
- **Use these forms for the affirmative/negative**:
  - Mm-hmm, Mm (affirmative) or Mm-mm (negative)
  - Uh-huh (affirmative) or Uh-uh (negative)

## Speaker labels

1. Use the full name on first reference
2. Use the speaker’s first name for the remainder of the transcription.

  ```text
    Bekah Hawrot Weigel: Hello, and welcome to Season 1, Episode 1 of the Virtual Coffee podcast…

    Dan Ott: Thanks, Bekah. In this episode, …

    Bekah: We start every episode of the podcast like we start every Virtual Coffee…

    Dan: Hi, I'm Dan. I'm a frontend developer… 
  ```

## Paragraph

1. Keep the original one or two lines per number of a range of timestamps.
2. Make sure that there is no space after the last word of each paragraph.

  ```text
    812
   
    00:49:49,139 --> 00:49:53,519
   
    Dan: [chuckles] Yeah. I'm looking forward
   
    to that talk.
  ```

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

- Repetitions:

  `I went, I went to the bank last Friday.`

### Single dash (-)

- Stutters:

  `I-I bought that ch-ch-ch-chair yesterday.`
- Speech errors:

  `I went to the bank on Thursday- no, Friday.`
- Incomplete sentence:

  `I wanted to say something but-`
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

### Em dash –

- Use it to introduce a list or idea.

  `Multiple languages are spoken in Canada — English, French, and Native languages.`

- Use it to insert an explanation, an example, or added information in the middle of a sentence.

  `We used to own a computer when — not like when I was super young — but when I was in high school.`
- Separate words before and after em dash with a space.

[How to create em dash on Windows or Mac](https://www.techtoolsforwriters.com/how-to-create-an-em-dash/).

### Ellipsis (…)

- Use it to describe a short pause; not longer than 4 seconds.

  `Anyway, it's... one of the things that I most proud of.`  
- Use it for false starts or when there is a change of thoughts.

  `Oh, I didn't… this thing is not perfect.`

### Capitalization

- The beginning of every sentence should be capitalized.
- When quoting, the first word of a complete sentence should be capitalized.
- Always research the proper capitalization `e.g., iPhone, Ruby on Rails, SaaS`.
- Always capitalize AM and PM for time `e.g., 2:45 PM, 5:00 AM`.
- Capitalize nouns followed by numbers or letters that are part of a series `e.g., Season 1, Episode 1`.
- Capitalize titles of movies, books, et cetera `e.g., “Gone With The Wind”`.
- Capitalize spelling `e.g., “My name is Anna, A-N-N-A.”`

### Non-text audio

- Sound events that are significant to the audio should also be noted by using brackets [ ]. The notes are always written in lowercase.
`e.g., [laughs] [chuckles] [giggles] [gasp]`. [laughs] is a normal laugh; [chuckles] is a soft laugh.
- Use [crosstalk 00:00:00] when two speakers are talking over one another. Try to get as much from each speaker as possible.

  ```text
  Host: I think another [crosstalk 00:31:28] perspective is that we can learn something from it.
  Guest: Well, that’s my opinion.
  ```

  The guest interjected before the host finished, but we do not want to split the sentence into two paragraphs. Therefore, the host’s sentence is completed, and then the guest's sentence is inserted into a new paragraph.
- Use [silence] to demonstrate a short pause in speech; not less than 4 seconds but not longer than 10 seconds.

  `Anyway [silence], I think I will do that next time.`

- Use [??] for unintelligible audio, when you have an idea what it says, but aren't completely sure.

  `We have an entire thread [??] in basecamp.`

- Use [unintelligible] if speech can be heard but it cannot be understood due to background noise or muffled voice, or when you are not able to guess what was said.

  `Yeah, there's not really much of [unintelligible].`

## Other notes

- Do not correct grammatical errors made by the speakers.
- Strictly transcribe what the speakers actually say, except for ‘uh’ and ‘um’.
- Do not censor hosts or the guest(s). If they say “shit”, write “shit”.
- Never change spoken contractions (e.g. y’all, ain’t, don’t, can’t, it’s, et cetera.)
- Try to best guess words that are unintelligible, and use [unintelligible] when you are not able to guess it in any way.
- **When in doubt, transcribe exactly!**

---

## Resources
- [Software Engineering Unlocked Podcast repo](https://github.com/mgreiler/se-unlocked/blob/master/Transcription_Guidelines.md)
- [#causeascene](https://hashtagcauseascene.com/community-transcription-guide/)
- [GoTranscript](https://gotranscript.com/transcription-guidelines)
- [OneSpace](http://support.onespace.com/training-resources/transcription-style-guide)
- [Punctuation Marks](https://punctuationmarks.org/em-dash/)
- [CC TRANSCRIBERS](https://cctranscribers.wordpress.com/2016/12/22/four-rules-of-verbatim-transcription/)

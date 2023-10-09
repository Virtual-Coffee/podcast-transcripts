# Contributing Guide

Welcome to the Virtual Coffee Podcast Transcript contributing guide!

We aim to make our podcast transcripts more accessible and enjoyable to read by all audiences.

At the moment, the transcripts are automatically generated, and they contain some mistakes.
We need to edit the transcripts manually by listening to the episode and improving it.

So, thank you so much for considering contributing to this repository. We appreciate all the contributors who try to make this space better.

We take our [Code of Conduct](https://virtualcoffee.io/code-of-conduct) very seriously, and all contributors must abide by it. If you believe someone has violated the Code of Conduct, please fill out our [CoC Violation Form](https://virtualcoffee.io/report-coc-violation).

## New Contributors

- If you're new to open source, check out our [Git & GitHub 101](https://virtualcoffee.io/resources/developer-resources/open-source/git-101) and [Contributor Guide](https://virtualcoffee.io/resources/developer-resources/open-source/contributor-guide) resources.

## Getting Started

---

**⚠️ We want to keep our transcripts format as consistent as possible. So, please follow the [Transcription Guidelines](/Transcriptions-Guidelines.md) when transcribing.**

---

1. When you find an [existing issue](https://github.com/Virtual-Coffee/podcast-transcripts/issues) you want to work on, comment on it, and a maintainer will respond and assign it to you. It can only be assigned to you if you've commented on the issue.
2. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) this repository.
3. [Clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) your forked repository.
4. Navigate to the directory of your local repository:

    ```bash
    cd podcast-transcript
    ```
5. [Create and checkout to a new branch](https://www.shellhacks.com/git-create-new-branch-and-checkout/).
6. Install the dependencies by running the command `yarn`.
7. Work on your changes by following our [transcription guidelines](/Transcriptions-Guidelines.md).
8. After you complete your work, check for the invalid timestamp formatting and fix indexing issues by running:

    ```bash
    yarn check-srt
    ```
    
    Fix the incorrect timestamp format manually, if any.
9. [Add](https://github.com/git-guides/git-add#common-usages-and-options-for-git-add) and [commit](https://github.com/git-guides/git-commit#common-usages-and-options-for-git-commit) your changes.
10. [Push](https://www.atlassian.com/git/tutorials/syncing/git-push) the commits to your forked repo.
11. [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request).

---

**Feel free to ask for help** in any part of this process if you need clarification. The maintainers can get you through the confusing parts as soon as possible.

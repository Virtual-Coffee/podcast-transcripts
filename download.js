const axios = require('axios');
const fs = require('fs');

async function main() {
  console.log('fetching episodes');
  const episodes = await axios.get('https://feeds.buzzsprout.com/1558601.json');

  for (let i = 0; i < episodes.data.length; i++) {
    const episode = episodes.data[i];
    console.log(
      `fetching episode ${episode.season_number}_${episode.episode_number}`
    );
    try {
      const transcript = await axios.get(
        `https://feeds.buzzsprout.com/1558601/${episode.id}/transcript.srt`,
        { responseType: 'text' }
      );
      fs.writeFileSync(
        `${__dirname}/episodes/${episode.season_number}_${episode.episode_number}.srt`,
        transcript.data
      );
      console.log(
        `saved episode ${episode.season_number}_${episode.episode_number}.srt`
      );
    } catch (error) {
      console.log(
        `no transcript for ${episode.season_number}_${
          episode.episode_number
        } (${error.response ? error.response.status : ''})`
      );
    }
  }
}

main();

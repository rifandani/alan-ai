import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
// files
import { ALAN_KEY } from './config/key';
import NewsCards from './components/NewsCards';
import Nav from './components/Nav';

function App() {
  const [articles, setArticles] = useState([]);
  const [weather, setWeather] = useState(null);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command, articles, number, weatherData }) => {
        switch (command) {
          case 'clear':
            setArticles([]);
            setWeather(null);
            break;
          case 'newHeadlines':
            setWeather(null);
            setArticles(articles);
            setActiveArticle(-1);
            break;
          case 'highlight':
            setWeather(null);
            setActiveArticle((prev) => prev + 1);
            break;
          case 'open':
            const parsedNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;

            const articleURL = articles[parsedNumber - 1].url || '/';

            if (parsedNumber > 40) {
              alanBtn().playText('I can only reach until 40');
            } else if (articleURL === undefined || !articleURL) {
              alanBtn().playText('Please speak more clearly');
            } else {
              alanBtn().playText('Opening the link...');
              window.open(articleURL, '_blank');
            }
            break;

          case 'showWeather':
            setArticles([]);
            setWeather(weatherData);
            break;

          default:
            alanBtn().playText('Command is not recognized');
        }
      },
    });
  }, []);

  return (
    <div className="app">
      <Nav />

      <NewsCards
        articles={articles}
        activeArticle={activeArticle}
        weather={weather}
      />
    </div>
  );
}

export default App;

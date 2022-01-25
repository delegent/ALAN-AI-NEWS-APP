import React, { useState, useEffect } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";
import wordsToNumbers from "words-to-numbers";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "492a7b6c221731f8568ec8fefd8517352e956eca572e1d8b807a3e2338fdd0dc/stage";
export default function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);
  const classes = useStyles();
  useEffect(function () {
    let unsub = alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle(function (prevActiveArticle) {
            return prevActiveArticle + 1;
          });
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            try {
              alanBtn().playText("Please try that again...");
            } catch (err) {
              alert("Please try that again...");
            }
          } else if (article) {
            window.open(article.url, "_blank");
            try {
              alanBtn().playText("Opening...");
            } catch (err) {
              alert("Opened");
            }
          } else {
            try {
              alanBtn().playText("Please try that again");
            } catch (err) {
              alert("Please try that again");
            }
          }
        }
      }
    });
    return function () {
      unsub.remove();
    };
  }, []);
  return (
    <div className="App">
      <div className={classes.logoContainer}>
        <h1 className={classes.main}>Alan, A News AI App</h1>
        <br />
        <img
          src="https://i.pinimg.com/originals/37/98/26/37982696da872738270b8435371ffaf4.gif"
          className={classes.logo}
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

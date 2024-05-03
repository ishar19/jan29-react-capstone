import { useEffect, useState } from "react";
import NewsUrl from '../../assets/news.svg'

export default function News() {
  const [news, setNews] = useState(null);
  // const [searchQuery, setSearchQuery] = useState();
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bb486104731648f4946f83166d773ec6';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);
  function createMarkup() {
    return { __html: news ? news.articles[0].description : <h1>Loading...</h1> };
  }
  const random = Math.floor(Math.random() * 100);

  return (
    <div>
      {/* <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter search query"
      /> */}

      {news ? (
        <div>
          { news.articles[0].urlToImage ? <img className="w-[30vw] h-[40vh] rounded-t-lg bg-transparent" src={news.articles[0].urlToImage }/> : <img src={NewsUrl}/>}
          <p className="rounded-b-lg w-[267px]"
          style={{backgroundColor: '#000000BD',
          color:'white',
          padding:'2px',
          }}> {news.articles[0].title}</p>
          <p className="text-justify" dangerouslySetInnerHTML={createMarkup()}></p>     
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

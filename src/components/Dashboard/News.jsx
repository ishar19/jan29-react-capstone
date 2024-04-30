import { useEffect, useState } from "react";
import NewsUrl from '../../assets/news.svg'

export default function News() {
  const [news, setNews] = useState(null);
  // const [searchQuery, setSearchQuery] = useState();
  useEffect(() => {
    const url = `https://api.webz.io/newsApiLite?token=328d0e22-0cbf-4c2e-8126-4d1cfff25eca&q=Modi`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);
  function createMarkup() {
    return { __html: news ? news.posts[0].highlightText : <h1>Loading...</h1> };
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
          { news.posts[0].thread.main_image ? <img className="w-[30vw] h-[40vh] rounded-t-lg bg-transparent" src={news.posts[0].thread.main_image}/> : <img src={NewsUrl}/>}
          <p className="rounded-b-lg w-[267px]"
          style={{backgroundColor: '#000000BD',
          color:'white',
          padding:'2px',
          }}> {news.posts[0].title}</p>
          <p className="text-justify" dangerouslySetInnerHTML={createMarkup()}></p>     
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

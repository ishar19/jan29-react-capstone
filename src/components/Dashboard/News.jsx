import { useEffect, useState } from "react";
import NewsUrl from "../../assets/news.svg";

export default function News() {
  const [news, setNews] = useState(null);
  const [searchQuery, setSearchQuery] = useState("india");
  const [search, setSearch] = useState();
  useEffect(() => {
    if (!searchQuery) return;

    const url = `https://api.webz.io/newsApiLite?token=328d0e22-0cbf-4c2e-8126-4d1cfff25eca&q=${searchQuery}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, [search]);
  function createMarkup() {
    return { __html: news ? news.posts[0].highlightText : <h1>Loading...</h1> };
  }
  const random = Math.floor(Math.random() * 100);

  return (
    <div>
      <h1>News</h1>
      <input
        type="text"
        value={searchQuery}
        onKeyDown={(e) => {
          e.key === "Enter" && setSearch(e.target.value);
        }}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter search query"
      />

      {news ? (
        <div>
          <p> {news.posts[0].title}</p>
          {/* <p dangerouslySetInnerHTML={_html:news.posts[0].highlightText}></p> */}
          <p dangerouslySetInnerHTML={createMarkup()}></p>
          {news.posts[0].thread.main_image ? (
            <img src={news.posts[0].thread.main_image} />
          ) : (
            <img src={NewsUrl} />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

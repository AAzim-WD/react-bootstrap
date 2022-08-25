import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Header = () => {
    const [articles, setArticles] = useState([]);
    console.log(articles);
   useEffect(() => {
   
    const url = ('https://newsapi.org/v2/top-headlines?country=us&apiKey=4d0d8a380f614790a02b0bf407a4361f')
    fetch(url)
    .then((res) => res.json())
    .then(data => setArticles(data.articles));
   } ,[])
    return (
        <div>
            <h1>Articles length : {articles.length}</h1>
            {
                articles.map((article) => <News article={article}></News>)
            }
        </div>
    );
};

export default Header;
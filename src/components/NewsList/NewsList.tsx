import React from "react";
import { NewsListStyled } from "./styles";

interface NewsListProps {
    articles: any[];
}


export const NewsList: React.FC<NewsListProps> = ({ articles }) => {
    return (
        <NewsListStyled>
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <NewsListStyled key={index}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </NewsListStyled>
                ))
            ) : (
                <p>No news found for your query</p>
            )}
        </NewsListStyled>
    );
};


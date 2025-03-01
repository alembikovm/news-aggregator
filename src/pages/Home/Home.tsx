import React, { useState } from "react";
import useSWR from "swr";
import { Filters } from "../../components/Filters";
import { Sources } from "../../components/Sources";
import { NewsList } from "../../components/NewsList";
import { fetcher, getNewsUrl } from "../../api/newsApi";
import { useDebouncedSearch } from "../../utils/debounce";
import { ContainerStyled } from "./styles";


const sources = [
    { id: "bbc-news", name: "BBC News" },
    { id: "cnn", name: "CNN" },
];

export const Home: React.FC = () => {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [category, setCategory] = useState("");
    const [selectedSources, setSelectedSources] = useState<string[]>([]);

    const debouncedSearch = useDebouncedSearch((query: string) => {
        setDebouncedQuery(query);
    }, 1000);

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        debouncedSearch(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
        setQuery("");
        setSelectedSources([]);
    };

    const toggleSource = (source: string) => {
        setSelectedSources((prev) =>
            prev.includes(source) ? prev.filter((s) => s !== source) : [...prev, source]
        );
        setQuery("");
        setCategory("");
    };

    const newsUrl = getNewsUrl(debouncedQuery, category, selectedSources)

    const { data, error } = useSWR(newsUrl, fetcher);

    if (error) return <p>Error loading data</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <ContainerStyled>
            <h1>Latest News</h1>

            <Filters
                query={query}
                category={category}
                onQueryChange={handleQueryChange}
                onCategoryChange={handleCategoryChange}
            />

            <Sources sources={sources} selectedSources={selectedSources} onToggleSource={toggleSource} />

            <NewsList articles={data.articles} />
        </ContainerStyled>
    );
};

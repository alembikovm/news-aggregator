import React from "react";
import { FiltersStyled } from "./styles";

interface FiltersProps {
    query: string;
    category: string;
    onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Filters: React.FC<FiltersProps> = ({ query, category, onQueryChange, onCategoryChange }) => {
    return (
        <FiltersStyled>
            <input
                type="text"
                placeholder="Enter search query..."
                value={query}
                onChange={onQueryChange}
            />
            <select value={category} onChange={onCategoryChange}>
                <option value="">All Categories</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>
        </FiltersStyled>
    );
};


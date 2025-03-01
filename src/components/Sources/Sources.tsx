import React from "react";
import { SourcesStyled } from "./styles";

interface SourcesProps {
    sources: { id: string; name: string }[];
    selectedSources: string[];
    onToggleSource: (source: string) => void;
}

export const Sources: React.FC<SourcesProps> = ({ sources, selectedSources, onToggleSource }) => {
    return (
        <SourcesStyled>
            {sources.map((source) => (
                <label key={source.id}>
                    <input
                        type="checkbox"
                        value={source.id}
                        checked={selectedSources.includes(source.id)}
                        onChange={() => onToggleSource(source.id)}
                    />
                    {source.name}
                </label>
            ))}
        </SourcesStyled>
    );
};


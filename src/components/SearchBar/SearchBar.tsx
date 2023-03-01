import { useCallback, useRef } from "react";
import { SearchContainer, SearchInput } from "./styles";

export default function SearchBar({
  value,
  onChange,
  onSearch,
}: {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSearch();
      }
    },
    [onSearch]
  );

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for an asset"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </SearchContainer>
  );
}

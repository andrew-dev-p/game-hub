import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <Input ref={ref} borderRadius={20} placeholder="Search games..." />
    </form>
  );
};

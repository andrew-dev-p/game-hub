import useGameQueryStore from "@/store";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";

export const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <Input ref={ref} borderRadius={20} placeholder="Search games..." />
    </form>
  );
};

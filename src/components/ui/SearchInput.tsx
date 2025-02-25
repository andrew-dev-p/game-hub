import useGameQueryStore from "@/store";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      if (location.pathname !== "/") {
        navigate("/");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input ref={ref} borderRadius={20} placeholder="Search games..." />
    </form>
  );
};

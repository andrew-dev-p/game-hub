import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./menu";

interface SortSelectorProps {
  selectedSortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

export const SortSelector: React.FC<SortSelectorProps> = ({
  selectedSortOrder,
  onSelectSortOrder,
}) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Recently added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by:{" "}
          {sortOrders.find((order) => order.value === selectedSortOrder)
            ?.label || "Relevance"}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

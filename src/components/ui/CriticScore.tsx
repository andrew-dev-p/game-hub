import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

export const CriticScore: React.FC<CriticScoreProps> = ({ score }) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" paddingX="5px" borderRadius="4px" color={color}>
      {score}
    </Badge>
  );
};

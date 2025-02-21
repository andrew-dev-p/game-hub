import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: React.ReactNode;
}

export const GameCardContainer: React.FC<GameCardContainerProps> = ({
  children,
}) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="300px">
      {children}
    </Box>
  );
};

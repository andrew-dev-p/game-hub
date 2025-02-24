import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface DefinitionItemProps {
  term: string;
  children: React.ReactNode;
}

export const DefinitionItem: React.FC<DefinitionItemProps> = ({
  term,
  children,
}) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

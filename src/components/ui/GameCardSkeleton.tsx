import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./skeleton";

export const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

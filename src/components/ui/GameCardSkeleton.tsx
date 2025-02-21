import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./Skeleton";

export const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

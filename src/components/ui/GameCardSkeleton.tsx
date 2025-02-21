import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./skeleton";

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

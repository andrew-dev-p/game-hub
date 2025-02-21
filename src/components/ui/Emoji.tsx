import { Image } from "@chakra-ui/react";
import bullsEye from "../../assets/bulls-eye.webp";
import meh from "../../assets/meh.webp";
import thumbsUp from "../../assets/thumbs-up.webp";

interface EmojiProps {
  rating: number;
}

export const Emoji: React.FC<EmojiProps> = ({ rating }) => {
  const emojiMap: {
    [key: number]: { src: string; alt: string; boxSize: string };
  } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "good", boxSize: "25px" },
    5: { src: bullsEye, alt: "excellent", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginRight={2} marginTop={1} />;
};

import React from "react";
import { Color } from "../../utils/types/Common";
import { StyledDiv } from "./StyledKanji.styles";

export interface Props {
  backgroundColor: Color;
  size: "lg" | "md" | "sm";
  className?: string;
}

export interface ComponentProps extends Props {
  character: string;
}

const StyledKanji: React.FC<ComponentProps> = ({ backgroundColor, size, character, ...props }) => {
  return (
    <StyledDiv backgroundColor={backgroundColor} size={size} {...props}>
      {character}
    </StyledDiv>
  );
};

export default StyledKanji;

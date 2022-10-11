import React from "react";
import styled from "styled-components";
import { Colors } from "../../utils/types/Common";

interface Props {
  name: string;
}

const Element = styled.div`
  border-top: 2px solid ${Colors.Pink};
  padding: 10px;
  border-bottom: 2px solid ${Colors.Pink};
`;

const ListOption: React.FC<Props> = ({ name }) => {
  return <Element>{name}</Element>;
};

export default ListOption;

import styled from "styled-components";
import { Link } from "react-router-dom";

const C_LI = styled.li`
  width: 50%;
  padding: 5px 10px;
`;

const StyledLink = styled(Link)`
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const LineItem = ({ name }) => {
  return (
    <C_LI>
      <StyledLink className="Link cLink">{name}</StyledLink>
    </C_LI>
  );
};

export default LineItem;

import { css } from "styled-components";

/* width < 576px */
export const xSmall = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

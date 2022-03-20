import React from 'react';
import styled, { css } from 'styled-components';
// import { darken, lighten } from 'polished';

const sizes = {
  large: {
    fontSize: '20px',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '26px',
    paddingRight: '26px',
  },
  medium: {
    fontSize: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    font-size: ${sizes[size].fontSize};
    padding-top: ${sizes[size].paddingTop};
    padding-right: ${sizes[size].paddingRight};
    padding-bottom: ${sizes[size].paddingBottom};
    padding-left: ${sizes[size].paddingLeft};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  --primary: #fff;

  outline: none;
  border: none;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
  padding: 8px 20px;
  background-color: var(--primary);
  color: #242424;
  border: 1px solid var(--primary);

  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      background: none;
      border: 1px solid var(--primary);
      transition: all 0.3s ease-out;
    `}

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #242424;
    transition: 250ms;
  }
  /* 크기 */
  ${sizeStyles}
  ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  size: 'medium',
};

export default Button;

// const STYLES = ['btn--primary', 'btn--outline'];
// const SIZES = ['btn--midum', 'btn--large'];

// const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];
//   const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : STYLES[0];
//   return (
//     <Link to='/' className='btn-mobile'>
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       ></button>
//     </Link>
//   );
// };

// export default Button;

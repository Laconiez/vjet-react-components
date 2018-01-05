import React, { PureComponent } from 'react';
import styled, { css, keyframes } from 'react-emotion';
import pt from 'prop-types';

import padding from '../../styles/padding';
import range from '../../utils/range';
import boxShadow from '../../styles/shadow';

let clickedTimeout;

const wideFade = keyframes`
  from {
    opacity: .5
    transform: scale(1)
  }
  to {
    opacity: 0
    transform: scale(10)
  }
`;

const getButtonStyles = ({
  primary, secondary, linked, disabled, shadow,
}) => {
  let bgColor;
  let border = 'solid 1px gray';
  let cursor = 'pointer';
  if (primary) {
    bgColor = 'red';
  } else if (secondary) {
    bgColor = 'green';
  } else if (linked) {
    bgColor = 'transparent';
    border = 'none';
  }
  if (disabled) {
    cursor = 'arrow';
  }
  return css`
    background-color: ${bgColor};
    border: ${border};
    cursor: ${cursor};
    ${!linked ? boxShadow({ level: shadow, color: 'rgba(0,0,0,.5)' }) : null};
  `;
};

const getClickedShadow = ({ shadow }) => {
  let clickedShadow;
  if (shadow > 0) {
    clickedShadow = shadow - 1;
  }
  return boxShadow({ level: clickedShadow, color: 'rgba(0,0,0,.5)' });
};

const Btn = styled('button')`
  padding: ${padding.m};
  position: relative;
  overflow: hidden;
  transition: box-shadow .1s ease;
  ${props => getButtonStyles(props)};

  & .reflexed {
    display: block;
    animation: ${wideFade} 0.7s ease;
  }

  &.clicked {
    ${props => getClickedShadow(props)};
  }
`;

const reflexSize = 10;

const Reflex = styled('div')`
  position: absolute;
  background-color: white;
  width: ${reflexSize}px;
  height: ${reflexSize}px;
  border-radius: 50%;
  z-index: 10;
  opacity: 0;
  outline: none;
  pointer-events: none;
  display: none;

  &:focus {
    outline: none;
  }
`;

function clickHandler(e) {
  const el = e.target.querySelector('.js-reflex:not(.reflexed)');
  const main = e.target;
  const { clientX, clientY } = e;
  el.setAttribute('style', `left: ${clientX - reflexSize}px; top: ${clientY - reflexSize}px`);
  el.classList.add('reflexed');
  main.classList.add('clicked');

  setTimeout(() => {
    el.classList.remove('reflexed');
  }, 800);

  if (clickedTimeout) {
    clearTimeout(clickedTimeout);
  }
  clickedTimeout = setTimeout(() => {
    main.classList.remove('clicked');
  }, 200);
}

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      children, primary, secondary, linked, disabled, onClick, shadow,
    } = this.props;

    return (
      <Btn
        primary={primary}
        secondary={secondary}
        linked={linked}
        disabled={disabled}
        shadow={shadow}
        onClick={(e) => {
          if (!disabled && !linked) {
            clickHandler(e);
          }
          onClick(e);
        }}
      >
        {range({ from: 1, to: 5 }).map(item => <Reflex className="js-reflex" key={item} />)}

        {children}
      </Btn>
    );
  }
}

Button.propTypes = {
  children: pt.shape({}).isRequired,
  primary: pt.bool,
  secondary: pt.bool,
  linked: pt.bool,
  disabled: pt.bool,
  shadow: pt.number,
  onClick: pt.func.isRequired,
};

Button.defaultProps = {
  primary: false,
  secondary: false,
  linked: false,
  disabled: false,
  shadow: 1,
};

export default Button;

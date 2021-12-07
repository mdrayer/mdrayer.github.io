import styled from '@emotion/styled';
import { useState } from 'react';

interface SpanWrapperProps {
  isHidden: boolean;
}
const SpanWrapper = styled('span')<SpanWrapperProps>`
  cursor: pointer;
  font-size: inherit;
  position: relative;

  span {
    visibility: visible;
  }

  ${props => {
    if (props.isHidden) {
      return `
      user-select: none;
      span {
        visibility: hidden;
      }
      `;
    }
  }}
`;

// Spoiler component from react-spoiler-tag.
// However, since that library requires an older version of React,
// We are just copy-pasting the component code.
// See https://github.com/dazulu/react-spoiler-tag

interface SpoilerProps {
  text: string;
  textColor?: string;
  hiddenColor?: string;
  revealedColor?: string;
  ariaLabelShowText?: string;
  ariaLabelHideText?: string;
}

function Spoiler({
  text,
  textColor = 'inherit',
  hiddenColor = 'currentColor',
  revealedColor = 'transparent',
  ariaLabelShowText = 'To reveal spoiler text click here.',
  ariaLabelHideText = 'To hide spoiler text again click here.',
}: SpoilerProps): JSX.Element {
  const [isHidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!isHidden);
  };

  const handleClick = () => {
    toggleHidden();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleHidden();
    }
  };

  return (
    <SpanWrapper
      isHidden={isHidden}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      style={{ backgroundColor: isHidden ? hiddenColor : revealedColor }}
      aria-label={isHidden ? ariaLabelShowText : ariaLabelHideText}
      role="button"
      tabIndex={0}
    >
      <span role="alert" style={{ color: textColor }}>
        {isHidden
          ? // Totally obscure the text from the DOM by replacing the text when hidden.
            text
              .split('')
              .map(() => 'X')
              .join('')
          : text}
      </span>
    </SpanWrapper>
  );
}

export default Spoiler;

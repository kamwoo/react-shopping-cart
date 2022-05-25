import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

export default function SnackBar({ message }) {
  return message && <Styled.Box key={Math.random()}>{message}</Styled.Box>;
}

SnackBar.propTypes = {
  message: PropTypes.string,
};

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const Styled = {
  Box: styled.div`
    min-width: 250px;
    padding: 20px;

    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: rgb(123, 123, 123);
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 20px;

    position: fixed;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;

    animation-duration: 0.5s;
    animation-name: ${fadeIn};
  `,
};

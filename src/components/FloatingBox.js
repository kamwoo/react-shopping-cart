import React from 'react';
import PriceText from './utils/PriceText';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FloatingBoxWrapper = styled.div`
  position: sticky;
  top: 20%;
  width: 448px;
  height: 318px;
  margin: 120px 25px 120px 0;
  padding: 0 28px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  background-color: inherit;
`;

const FloatingBoxTitleWrapper = styled.div`
  text-align: left;
  width: 100%;
  border-bottom: 3px solid #dddddd;
`;

const FloatingBoxTitle = styled.h3`
  font-weight: 400;
  font-size: 24px;
  margin: 28px 0 25px;
`;

const FloatingBoxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 166px;
  margin: 35px 0;
`;

const FloatingBoxTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FloatingBoxText = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #333333;
  background: linear-gradient(to top, rgba(42, 193, 188, 0.5) 30%, transparent 50%);
`;

const StyledPriceText = styled(PriceText)`
  && {
    background: linear-gradient(to top, rgba(42, 193, 188, 0.5) 30%, transparent 50%);
  }
`;

const Button = styled.button`
  width: 100%;
  height: 73px;
  font-size: 24px;
  background-color: #2ac1bc;
  border: none;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

function FloatingBox({ price, selectedItems, linkPath, onClick, disabled }) {
  return (
    <FloatingBoxWrapper>
      <FloatingBoxTitleWrapper>
        <FloatingBoxTitle>결제금액</FloatingBoxTitle>
      </FloatingBoxTitleWrapper>

      <FloatingBoxContentWrapper>
        <FloatingBoxTextWrapper>
          <FloatingBoxText>총 결제금액</FloatingBoxText>
          <StyledPriceText fontSize="20px" fontWeight="700">
            {price}
          </StyledPriceText>
        </FloatingBoxTextWrapper>

        <Link to={linkPath}>
          {selectedItems ? (
            <Button type="button" onClick={onClick} disabled={disabled}>
              주문하기 ({selectedItems}개)
            </Button>
          ) : (
            <Button type="button" onClick={onClick} disabled={disabled}>
              결제하기{' '}
              <PriceText color="#ffffff" fontSize="24px">
                {price}
              </PriceText>
            </Button>
          )}
        </Link>
      </FloatingBoxContentWrapper>
    </FloatingBoxWrapper>
  );
}

export default FloatingBox;

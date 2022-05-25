import styled from 'styled-components';
import { memo } from 'react';
import Counter from 'component/common/Counter';
import CheckBox from 'component/common/CheckBox';
import Button from 'component/common/Button';
import { useDispatch } from 'react-redux';
import {
  addProductCart,
  checkProductCart,
  removeProductCart,
  subtractProductCart,
} from 'store/action/cartActions';
import { updateSnackBar } from 'store/action/snackBarActions';
import { ALERT_MESSAGE } from 'constant/messages';

function CartProduct({ product }) {
  const { image, name, price, count } = product;
  const dispatch = useDispatch();

  const handleUpClick = () => {
    dispatch(addProductCart(product));
  };

  const handleDownClick = () => {
    dispatch(subtractProductCart(product));
  };

  const handleCheckChange = () => {
    dispatch(checkProductCart(product, !product.checked));
  };

  const handleDeleteClick = () => {
    dispatch(removeProductCart(product));
    dispatch(updateSnackBar(`${product.name} ${ALERT_MESSAGE.REMOVE_CART}`));
  };

  return (
    <Styled.CartProductBox>
      <Styled.CartProductPresentBox>
        <CheckBox checked={product.checked} onCheckChange={handleCheckChange} />
        <Styled.CartProductImage src={image} />
        <Styled.ProductName>{name}</Styled.ProductName>
      </Styled.CartProductPresentBox>

      <Styled.CarProductOperateBox>
        <Button onClick={handleDeleteClick}>
          <img src="trashCan.svg" />
        </Button>
        <Counter count={count} onUPClick={handleUpClick} onDownClick={handleDownClick} />
        <p>{price.toLocaleString('ko-KR')} 원</p>
      </Styled.CarProductOperateBox>
    </Styled.CartProductBox>
  );
}

export default memo(CartProduct);

const Styled = {
  CartProductImage: styled.img`
    width: 144px;
    height: 147px;
    margin-left: 15px;

    object-fit: cover;
  `,

  CartProductBox: styled.div`
    width: max(736px);
    display: flex;
    justify-content: space-between;
    padding: 23px 0;
    border-bottom: 2px solid #cccccc;
  `,

  CartProductPresentBox: styled.div`
    display: flex;
    align-items: flex-start;
  `,

  CarProductOperateBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  `,

  ProductName: styled.p`
    margin-left: 20px;
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
  `,
};

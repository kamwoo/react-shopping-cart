import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import OrderListItem, { ORDER_LIST_ITEM_TYPE } from '../components/orderListItem/OrderListItem';
import PageTitle from '../components/pageTitle/PageTitle';
import PaymentAmount, { PAYMENT_AMOUNT_TYPE } from '../components/paymentAmount/PaymentAmount';
import SelectedProductList, { SELECTED_PRODUCT_LIST_TYPE } from '../components/selectedProductList/SelectedProductList';

const Content = styled.section`
  position: relative;
  display: flex;
  margin-top: 25px;
  padding: 0 18px;
`;

const OrderPaymentAmountWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
`;

const OrderPayment = () => {
  const shoppingCartList = useSelector((state) => state.shoppingCart.shoppingCartList);
  const orderPaymentList = shoppingCartList.filter((item) => item.isChecked);

  return (
    <>
      <PageTitle>주문/결제</PageTitle>
      <Content>
        <div>
          <SelectedProductList
            listType={SELECTED_PRODUCT_LIST_TYPE.ORDER_PAYMENT}
            itemType={ORDER_LIST_ITEM_TYPE.ORDER_PAYMENT}
            productList={orderPaymentList}
            ListItem={OrderListItem}
          />
        </div>
        <OrderPaymentAmountWrapper>
          <PaymentAmount type={PAYMENT_AMOUNT_TYPE.ORDER_PAYMENT} price={325000} />
        </OrderPaymentAmountWrapper>
      </Content>
    </>
  );
};

export default OrderPayment;

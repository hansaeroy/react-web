import React from 'react';
import CardItem from './CardItem';
import styled from 'styled-components';

const CardBlock = styled.div`
  padding: 4rem;
  background: #fff;

  h1 {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;

  ul {
    display: flex;
    margin-bottom: 24px;

    @media only screen and (max-width: 960px) {
      display: block;
    }
  }
`;

const Cards = () => {
  return (
    <CardBlock>
      <h1>Check out these EPIC Destinations!</h1>
      <Container>
        <Wrapper>
          <ul>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </Wrapper>
      </Container>
    </CardBlock>
  );
};

export default Cards;

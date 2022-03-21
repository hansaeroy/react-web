import React from 'react';
import CardItem from './CardItem';
import styled from 'styled-components';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import img8 from '../assets/img-8.jpg';
import img9 from '../assets/img-9.jpg';

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
              src={img9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul>
            <CardItem
              src={img3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={img8}
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

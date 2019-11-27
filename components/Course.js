import React from 'react';
import styled from 'styled-components';

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Name>{props.name}</Name>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  width: 335px;
  height: 335px;
  background: white;
  margin: 10px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0,  );
`;

const Cover = styled.View`
  height: 260px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  height: 48px;
  width: 48px;
`;

const Title = styled.Text`
`;

const Subtitle = styled.Text`
`;

const Content = styled.View`
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
`;

const Caption = styled.Text`
`;

const Name = styled.Text`
`;

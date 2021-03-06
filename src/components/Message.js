import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
`;

const Text = styled.span`
    color: ${props=>props.color};
`;

const Message= ({ color,text }) => (
  <Container>
    <Text color={color}>
      {text}
    </Text>
  </Container>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
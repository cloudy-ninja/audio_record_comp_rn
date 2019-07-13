import React from "react";
import {
  View,
  Text
} from 'react-native'
import {
  Container,
} from '../components/Home'

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Text>Welcome to React Native!</Text>
      </Container>
    );
  }
}

export default HomeScreen
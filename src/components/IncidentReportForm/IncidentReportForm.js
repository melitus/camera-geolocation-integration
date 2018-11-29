import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Card, CardItem, Thumbnail, Text, Button, Textarea, Icon, Left, Body, Right, Form, Item, Input, Label } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
//import Person from './Person';
//import GeoCoordinates from './GeoCoordinates';

class IncidentReportForm extends React.Component {
  render() {
    const {
      handleSubmit,
      person,
      description,
      geoCoordinates,
      cameraImage,
    } = this.props;
    // console.log('camera image:', cameraImage);
    return (
      <Container>
          <Content style={{ margin: 12 }}>
          <Card>
            <CardItem cardBody>
              <Image
                source={{ uri: cameraImage }}
                style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                  <Icon active name="locate" />
                  <Text>252 Herbert Macualay way, Yaba, Lagos.</Text>
              </Left>
            </CardItem>
          </Card>
          <Form>
              <Input placeholder="Phone number"/>
              <Textarea rowSpan={3}  bordered placeholder="Description" />
          </Form>
          </Content>
              <Footer>
                <FooterTab>
                  <LinearGradient style={styles.gradient}
                    colors={['#0A4748', '#612C2E']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Right>
                    <TouchableHighlight
                      onPress={() => this.props.navigation.navigate('loader')}
                    >
                      <Text style={styles.sendText} onPress={handleSubmit}>
                        SEND
                      </Text>
                    </TouchableHighlight>
                    </Right>
                  </LinearGradient>
                </FooterTab>
              </Footer>
      </Container>
    );
  }
}

export default IncidentReportForm;

const styles = StyleSheet.create({
  container: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
  },
  content: {
    fontSize: 12,
    textAlign: 'justify',
    padding: 10,
    height: '100%',
  },
  gradient: {
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    marginTop: 5,
  },
  inputField: {
    width: '100%',
  },
  sendText: {
      paddingTop: 20,
      color: 'white',
  }

});

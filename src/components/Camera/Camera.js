import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableWithoutFeedback, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Camera from 'react-native-camera';
import { Container, Content, Footer, FooterTab, Icon, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import RNFS from 'react-native-fs';

class CameraScreen extends React.Component {
  constructor(props){
    super(props)
    this.takePicture = this.takePicture.bind(this);
  }

  navigateToReport() {
    this.props.navigation.navigate('report',{ imageuri: this.props.mediaUri })
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        this.props.takePicture({
          mediaUri: data.path,
          hasCaptured: true,
        });
      })
      .catch(err => console.error(err));
  }

  renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureTarget={Camera.constants.CaptureTarget.disk}
      >
          <View />
      </Camera>
    );
  }

  renderImage() {
    const { imageuri } = this.props;
    RNFS.readFile(imageuri, "base64").then(data => {
// binary data
console.log("Image converterd to binary", data);
});
    return (
      <View>
        <Image
          source={{ uri:imageuri }}
          style={styles.preview}
        />
      </View>
    );
  }

  render() {
    if(!this.props.imageuri){
        return (
          <Container>
            <Content>
              <View style={styles.container}>
                {this.props.imageuri ? this.renderImage() : this.renderCamera()}
              </View>
            </Content>
            <Footer>
              <FooterTab>
                    <LinearGradient style={styles.gradient}
                      colors={['#0A4748', '#612C2E']}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <TouchableWithoutFeedback
                        onPress={this.takePicture}
                      >
                        <Icon name='md-camera' style={styles.capture}/>
                      </TouchableWithoutFeedback>
                    </LinearGradient>
              </FooterTab>
            </Footer>
          </Container>
        );
    }
    if(this.props.imageuri){
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            {this.props.imageuri ? this.renderImage() : this.renderCamera()}
          </View>
        </Content>
        <Footer>
          <FooterTab>
                <LinearGradient style={styles.gradient}
                  colors={['#0A4748', '#612C2E']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                >
                <TouchableWithoutFeedback                >
                  <Icon name='md-camera' style={styles.retakePicture}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => this.navigateToReport()}
                >
                  <Icon name='md-checkmark' style={styles.acceptPicture}/>
                </TouchableWithoutFeedback>
                </LinearGradient>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

  static propTypes = {
    aspect: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    captureMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    captureQuality: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    captureTarget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    flashMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    takePicture: PropTypes.func,
    navigateToReport: PropTypes.func,
    change: PropTypes.func,
  };

  static defaultProps = {
    aspect: null,
    captureMode: null,
    captureQuality: null,
    captureTarget: null,
    flashMode: null,
    takePicture: null,
    change: () => {},
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 10,
  },
  retakePicture: {
    textAlign: 'left',
    color: '#fff',
    paddingLeft: 20,
    paddingTop: 10,
    bottom: 0,
    right: 0,
  },
  acceptPicture: {
    textAlign: 'right',
    color: '#fff',
    paddingRight: 20,
    paddingBottom: 10,
  },
  gradient: {
    flex: 1,
  }
});

export default CameraScreen;

import {XR} from '@callstack/react-native-visionos';
import * as React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

export const OpenXRSession = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openXRSession = async () => {
    try {
      console.log(XR);
      if (!XR.supportsMultipleScenes) {
        Alert.alert('Error', 'Multiple scenes are not supported');
        return;
      }
      await XR.requestSession('TestImmersiveSpace');
      setIsOpen(true);
    } catch (e) {
      Alert.alert('Error', e.message);
      setIsOpen(false);
    }
  };

  const closeXRSession = async () => {
    if (isOpen) {
      await XR.endSession();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Is XR session open: {isOpen}</Text>
      <Button title="Open XR Session" onPress={openXRSession} />
      <Button title="Close XR Session" onPress={closeXRSession} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
  },
});

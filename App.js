import React, { useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet, Button, Image } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Peek A Boo!</Text>
            <Image
              style={styles.modalImage}
              source={{ uri: 'https://cdn.pixabay.com/photo/2022/12/14/21/48/quokka-7656365_1280.png' }}
            />
            <Text style={styles.modalTextSmall}>Great Job Finding Me!</Text>
            <Pressable style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.buttonText}>Back to Hiding</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {!modalVisible && (
        <Pressable style={styles.button} onPress={openModal}>
          <Text style={styles.buttonText}>Can You Find Me?</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2B4F43',
  },
  button: {
    marginTop: 100,
    backgroundColor: '#B78A4F',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#182E23',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    height: '80%',
    margin: 20,
    backgroundColor: '#719771',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: '#B78A4F',
    padding: 10,
    borderRadius: 8,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: '#182E23',
  },

  modalTextSmall: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    color: '#182E23',
  },
  modalImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
});

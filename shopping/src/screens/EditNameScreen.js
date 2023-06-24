import { Text, StyleSheet, View, TextInput, StatusBar, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

import LeftIcon from '../components/icons/LeftIcon';
import { Colors } from '../constants/Colors';
const textPrimaryColor = `rgb(${Colors.text.primary})`;
const primaryColor = `rgb(${Colors.primary})`;
import { goBack } from '../uitls/naviation'
import { connect, useDispatch } from 'react-redux';
import { updateName } from '../redux/auth/action'

const EditNameScreen = ({ route, navigation, auth }) => {
  const [name, setName] = useState(auth.user?.name)
  const dispatch = useDispatch()
  const onSave = () => {
    dispatch(updateName(auth.user.id, name))
    goBack()
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        {/* <Text style={styles.titleHeader}></Text> */}
      </View>
      <View style={styles.containerFull}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => goBack()}
          >
            <LeftIcon
              height={42}
              width={42}
              weight={1.3}
              color={textPrimaryColor}
            />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Tên</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txtButton} onPress={onSave}>Lưu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.screen}>
              <StatusBar barStyle="dark-content" />
              <View style={styles.editContainer}>
                <TextInput style={styles.inputEdit}
                  placeholder={'Tên'} 
                  value={name}
                  placeholderTextColor={`rgb(${Colors.text.secondary})`}
                  onChangeText={text=>setName(text)}/>
                  
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView >
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(EditNameScreen);
const styles = StyleSheet.create({
  header: {
    marginHorizontal: 22,
    marginTop: 25,
    marginVertical: 10
  },
  titleHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  },
  containerFull: {
    flex: 1
  },
  backButton: {
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  rightIcon: {
    marginRight: 30,
  },
  leftIcon: {
    marginLeft: 20,
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 10
  },
  container: {
    backgroundColor: `rgb(${Colors.background})`,
    marginTop: 15,
    flex: 1,
  },
  button: {
    position: 'absolute',
    right: 20
  },
  txtButton: {
    color: `rgb(${Colors.primary})`,
    fontSize: 20,
    fontWeight:'bold'
  },
  inputEdit: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    color:  `rgb(${Colors.text.primary})`
  },
});

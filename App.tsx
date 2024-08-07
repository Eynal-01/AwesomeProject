// @ts-nocheck
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  StyledView,
  StyledText,
  // StyledButton,
  StyledTouchableOpacity,
  StyledTextInput,
} from './src/common/StyledComponents';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const [form, setForm] = useState({});

  const handleInput = (keyname, value) => {
    setForm(prevState => ({
      ...prevState,
      [keyname]: value,
    }));
  };
  //
  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  return (
    <SafeAreaProvider style={{alignContent: 'center'}}>
      <SafeAreaView edges={['right', 'left', 'top']} style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <StyledView className="flex-1 white justify-center items-center p-5">
            <StyledText className="text-3xl">Login App</StyledText>

            <StyledTextInput
              value={form?.name}
              placeholder="Enter your name"
              placeholderTextColor="gray"
              className="w-full border-[1px] rounded-lg p-4 mx-5 mt-5 text-black"
              onChangeText={value => {
                handleInput('name', value);
              }}></StyledTextInput>

            <StyledTextInput
              value={form?.email}
              placeholder="Enter your email"
              placeholderTextColor="gray"
              className="w-full border-[1px] rounded-lg p-4 mx-5 mt-5 text-black"
              onChangeText={value => {
                handleInput('email', value);
              }}></StyledTextInput>

            <StyledTouchableOpacity
              className="bg-blue-500 p-4 mt-5 w-full rounded-lg"
              onPress={() => {
                console.log(form);
              }}>
              <StyledText className="text-lg text-center text-white">
                Login
              </StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

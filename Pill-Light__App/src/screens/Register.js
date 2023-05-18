import { StatusBar } from 'expo-status-bar';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import Welcome from './Welcome';
import React from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// npm install @react-native-async-storage/async-storage

const Register = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [button1Color, setButton1Color] = useState('#fafafa');
    const [button2Color, setButton2Color] = useState('#fafafa');

    const handleButton1Press = () => {
        setButton1Color('#57C5B6');
        setButton2Color('#fafafa');
        setGender('남자');
    };

    const handleButton2Press = () => {
        setButton1Color('#fafafa');
        setButton2Color('#57C5B6');
        setGender('여자');
    };

    const handleRegister = async () => {
        try {
            if (!username || !password || !name || !gender || !birthYear || !birthMonth || !birthDay) {
                Alert.alert('회원 가입 실패', '모든 항목을 입력해주세요.');
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert('회원 가입 실패', '비밀번호가 일치하는지 확인해주세요.');
                return;
            }

            // 기존의 회원 정보 가져오기
            const storedUsers = await AsyncStorage.getItem('registeredUsers');
            const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

            // 아이디 중복 체크
            const isUsernameExists = parsedUsers.some(user => user.username === username);
            if (isUsernameExists) {
                Alert.alert('회원 가입 실패', '이미 존재하는 아이디입니다.');
                return;
            }

            // 새로운 회원 정보 생성
            const newUser = {
                username,
                password,
                name,
                gender,
                birthYear,
                birthMonth,
                birthDay,
            };

            // 기존 회원 정보에 새로운 회원 추가
            const updatedUsers = [...parsedUsers, newUser];

            // AsyncStorage에 회원 정보 저장 (key, value)
            await AsyncStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

            Alert.alert('회원 가입 성공');
            navigation.navigate('Welcome');
        } catch (error) {
            Alert.alert('회원 가입 실패', '회원 가입 중에 오류가 발생했습니다.');
        }
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.avoid}
            >
                <ScrollView>
                    <View>
                        <View style={styles.registerTitleText}>
                            <Text style={{
                                fontSize: 44,
                                fontWeight: "bold",
                                marginBottom: "1%"
                            }}
                            >
                                회원가입
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder='아이디 입력'
                                placeholderTextColor="lighterGrey"
                                autoCapitalize='none'
                                value={username}
                                onChangeText={setUsername}
                                style={styles.registerInput}
                            >
                            </TextInput>
                            <TextInput
                                placeholder='비밀번호 입력'
                                placeholderTextColor="lighterGrey"
                                autoCapitalize='none'
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                style={styles.registerInput}
                            >
                            </TextInput>
                            <TextInput
                                placeholder='비밀번호 확인'
                                placeholderTextColor="lighterGrey"
                                autoCapitalize='none'
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                style={styles.registerInput}
                                secureTextEntry={true}
                            >
                            </TextInput>
                        </View>
                        <View style={{
                            marginTop: "6%",
                        }}>
                            <TextInput
                                placeholder='이름 입력'
                                placeholderTextColor="lighterGrey"
                                autoCorrect={true}
                                autoCapitalize="none"
                                value={name}
                                onChangeText={setName}
                                style={styles.registerInput}
                            >
                            </TextInput>
                        </View>
                        <View style={{
                            marginTop: "4%",
                        }}
                        >
                            <Text
                                style={{
                                    marginLeft: "6%",
                                    fontSize: 18,
                                }}
                            >
                                성별
                            </Text>

                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingVertical: "2%",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={handleButton1Press}
                                    style={{
                                        backgroundColor: button1Color,
                                        width: "45%",
                                        height: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderTopLeftRadius: 10,
                                        borderBottomLeftRadius: 10,
                                    }}
                                >
                                    <Text>남자</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={handleButton2Press}
                                    style={{
                                        backgroundColor: button2Color,
                                        width: "45%",
                                        height: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderTopRightRadius: 10,
                                        borderBottomRightRadius: 10,
                                    }}
                                >
                                    <Text >여자</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{
                                    marginTop: "4%",
                                    marginLeft: "6%",
                                    fontSize: 18,
                                }}
                            >
                                생년월일
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingVertical: "2%",
                                }}
                            >
                                <TextInput
                                    placeholder='출생년도'
                                    placeholderTextColor="lighterGrey"
                                    value={birthYear}
                                    onChangeText={setBirthYear}
                                    style={{
                                        fontSize: 18,
                                        width: "35%",
                                        backgroundColor: "#fafafa",
                                        padding: "4%",
                                        margin: "1%",
                                        borderRadius: 10,
                                        marginVertical: "1%",
                                    }}
                                >
                                </TextInput>
                                <TextInput
                                    placeholder='월'
                                    placeholderTextColor="lighterGrey"
                                    value={birthMonth}
                                    onChangeText={setBirthMonth}
                                    style={{
                                        fontSize: 18,
                                        width: "25%",
                                        backgroundColor: "#fafafa",
                                        padding: "4%",
                                        margin: "1%",
                                        borderRadius: 10,
                                        marginVertical: "1%",
                                    }}
                                >
                                </TextInput>
                                <TextInput
                                    placeholder='일'
                                    placeholderTextColor="lighterGrey"
                                    value={birthDay}
                                    onChangeText={setBirthDay}
                                    style={{
                                        fontSize: 18,
                                        width: "25%",
                                        backgroundColor: "#fafafa",
                                        padding: "4%",
                                        margin: "1%",
                                        borderRadius: 10,
                                        marginVertical: "1%",
                                    }}
                                >
                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.subContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Welcome")}
                                onPress={handleRegister}
                                style={styles.logintBtn}
                            >
                                <Text style={styles.login}>회원가입 하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "white",
        flex: 1
    },
    avoid: {
        flex: 1,
    },
    subContainer: {
        marginTop: "15%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    registerTitleText: {
        marginTop: "8%",
        marginBottom: "8%",
        justifyContent: "center",
        alignItems: "center",
    },
    login: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    sign: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#57C5B6",
    },
    logintBtn: {
        backgroundColor: "#57C5B6",
        width: "90%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textInput: {
        fontSize: 18,
        width: "90%",
        backgroundColor: "#fafafa",
        padding: "6%",
        margin: "5%",
        borderRadius: 10,
        marginVertical: "3%",
    },
    registerInput: {
        fontSize: 18,
        width: "90%",
        backgroundColor: "#fafafa",
        padding: "4%",
        margin: "5%",
        borderRadius: 10,
        marginVertical: "1.2%",
    },
    cickedBtn: {
        backgroundColor: "#57C5B6",
        width: "45%",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
});

export default Register


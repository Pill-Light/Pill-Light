import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { UserInfo } from '../store/UserInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // 로그인 처리 로직을 구현합니다.
        // AsyncStorage에서 저장된 회원 정보와 비교합니다.

        try {
            // AsyncStorage에서 저장된 회원 정보 가져오기
            const storedUsers = await AsyncStorage.getItem('registeredUsers');
            const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

            // 입력된 아이디와 비밀번호와 일치하는 회원 찾기
            const user = parsedUsers.find(
                (user) => user.username === username && user.password === password
            );

            if (user) {
                Alert.alert('로그인 성공', `로그인한 아이디: ${user.username}`);
                // 로그인에 성공했을 때, 추가적인 동작을 수행하거나 다른 화면으로 이동할 수 있습니다.
            } else {
                Alert.alert('로그인 실패', '아이디 또는 비밀번호가 잘못되었습니다.');
            }
        } catch (error) {
            Alert.alert('로그인 실패', '로그인 중에 오류가 발생했습니다.');
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
                        <View style={styles.titleText}>
                            <Text style={{
                                fontSize: 44,
                                fontWeight: "bold",
                                marginBottom: "2%"
                            }}
                            >
                                로그인
                            </Text>
                        </View>
                        <View style={{
                            marginVertical: "10%",
                        }}
                        >
                            <TextInput
                                placeholder='Enter id'
                                placeholderTextColor="lighterGrey"
                                value={username}
                                onChangeText={setUsername}
                                style={styles.textInput}
                            >
                            </TextInput>
                            <TextInput
                                placeholder='Enter password'
                                placeholderTextColor="lighterGrey"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                                style={styles.textInput}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.subContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                                onPress={handleLogin}
                                style={styles.logintBtn}
                            >
                                <Text style={styles.login}>로그인 하기</Text>
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
    container: {
        marginTop: "30%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    subContainer: {
        marginTop: "15%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        marginTop: "15%",
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
    signBtn: {
        marginTop: "20%",
        backgroundColor: "#fafafa",
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
});

export default Login

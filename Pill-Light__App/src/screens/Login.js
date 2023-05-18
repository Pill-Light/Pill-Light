import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // AsyncStorage에서 저장된 회원 정보 가져오기
            const storedUsers = await AsyncStorage.getItem('registeredUsers');
            const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

            // 입력된 아이디와 비밀번호와 일치하는 회원 찾기
            const user = parsedUsers.find(
                (user) => user.username === username && user.password === password
            );

            if (!username || !password) {
                Alert.alert('로그인 실패', '아이디 또는 비밀번호를 입력해주세요.');
                return;
            } else if (user) {
                Alert.alert('로그인 성공', `사용자 명 : ${user.name}`);
                navigation.navigate('MainPage');
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
                            marginVertical: "6%",
                        }}
                        >
                            <TextInput
                                placeholder='아이디 입력'
                                placeholderTextColor="lighterGrey"
                                autoCapitalize='none'
                                value={username}
                                onChangeText={setUsername}
                                style={styles.textInput}
                            >
                            </TextInput>
                            <TextInput
                                placeholder='비밀번호 입력'
                                placeholderTextColor="lighterGrey"
                                autoCapitalize='none'
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                                style={styles.textInput}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.subContainer}>
                            <TouchableOpacity
                                onPress={handleLogin}
                                style={styles.logintBtn}
                            >
                                <Text style={styles.login}>로그인 하기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("MainPage")}
                                style={styles.signBtn}
                            >
                                <Text style={styles.sign}>건너뛰기</Text>
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
        marginTop: "10%",
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
        marginTop: "6%",
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

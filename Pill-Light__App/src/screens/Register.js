import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Button, View } from 'react-native';
import React from 'react';
import { useState } from 'react';

const Register = () => {
    const [button1Color, setButton1Color] = useState('#fafafa');
    const [button2Color, setButton2Color] = useState('#fafafa');

    const handleButton1Press = () => {
        setButton1Color('#57C5B6');
        setButton2Color('#fafafa');
    };innerHeight

    const handleButton2Press = () => {
        setButton1Color('#fafafa');
        setButton2Color('#57C5B6');
    };

    return (
        <SafeAreaView>
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
                        style={styles.registerInput}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='비밀번호 입력'
                        placeholderTextColor="lighterGrey"
                        style={styles.registerInput}
                        secureTextEntry={true}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='비밀번호 확인'
                        placeholderTextColor="lighterGrey"
                        style={styles.registerInput}
                        secureTextEntry={true}
                    >
                    </TextInput>
                </View>
                <View style={{
                    marginTop: "8%",
                }}>
                    <TextInput
                        placeholder='이름 입력'
                        placeholderTextColor="lighterGrey"
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
                        onPress={() => navigation.navigate("Login")}
                        style={styles.logintBtn}
                    >
                        <Text style={styles.login}>회원가입 하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
    registerInput: {
        fontSize: 18,
        width: "90%",
        backgroundColor: "#fafafa",
        padding: "4%",
        margin: "5%",
        borderRadius: 10,
        marginVertical: "1%",
    },
    manBtn: {
        backgroundColor: "#fafafa",
        width: "45%",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    girlBtn: {
        backgroundColor: "#fafafa",
        width: "45%",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
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

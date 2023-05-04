import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Login = () => {
    return (
        <SafeAreaView>
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
                        placeholderTextColor= "lighterGrey"
                        style={styles.textInput}   
                    >        
                    </TextInput>
                    <TextInput
                        placeholder='Enter password'
                        placeholderTextColor="lighterGrey"
                        style={styles.textInput}
                        secureTextEntry={true}

                    >
                    </TextInput>
                </View>
                <View style={styles.subContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={styles.logintBtn}
                    >
                        <Text style={styles.login}>로그인 하기</Text>
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

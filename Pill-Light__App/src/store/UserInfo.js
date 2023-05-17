import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import React from 'react';
import { useState } from 'react';

export const UserInfo = (username, password) => {
    // 예시로 저장된 회원 정보
    const savedUsername = 'user123';
    const savedPassword = 'pass123';

    if (username === savedUsername && password === savedPassword) {
        return true;
    } else {
        return false;
    }
};


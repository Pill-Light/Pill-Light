import AsyncStorage from '@react-native-async-storage/async-storage';

export const registerUser = async (user) => {
    try {
        const { username, password, name, gender, birthYear, birthMonth, birthDay } = user;

        if (!username || !password || !name || !gender || !birthYear || !birthMonth || !birthDay) {
            throw new Error('모든 항목을 입력해주세요.');
        }

        if (password !== user.confirmPassword) {
            throw new Error('비밀번호가 일치하는지 확인해주세요.');
        }

        const storedUsers = await AsyncStorage.getItem('registeredUsers');
        const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

        const isUsernameExists = parsedUsers.some((existingUser) => existingUser.username === username);
        if (isUsernameExists) {
            throw new Error('이미 존재하는 아이디입니다.');
        }

        const newUser = {
            username,
            password,
            name,
            gender,
            birthYear,
            birthMonth,
            birthDay,
            loggedIn: false, // 로그인 여부 추가
        };

        const updatedUsers = [...parsedUsers, newUser];
        await AsyncStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    } catch (error) {
        throw new Error('회원 가입 실패: ' + error.message);
    }
};

export const loginUser = async (username, password) => {
    try {
        const storedUsers = await AsyncStorage.getItem('registeredUsers');
        const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

        const userIndex = parsedUsers.findIndex(
            (user) => user.username === username && user.password === password
        );
        if (userIndex === -1) {
            throw new Error('유효하지 않은 아이디 또는 비밀번호입니다.');
        }

        // 로그인 상태 변경
        const updatedUsers = parsedUsers.map((existingUser, index) => ({
            ...existingUser,
            loggedIn: index === userIndex ? true : false
        }));
        await AsyncStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

        return updatedUsers[userIndex];
    } catch (error) {
        throw new Error('로그인 실패: ' + error.message);
    }
};

export const getUserInfo = async () => {
    try {
        const storedUsers = await AsyncStorage.getItem('registeredUsers');
        const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

        const loggedInUser = parsedUsers.find((user) => user.loggedIn === true);
        if (!loggedInUser) {
            throw new Error('로그인된 사용자 정보를 찾을 수 없습니다.');
        }
        console.log('Logged In User:', loggedInUser); // 변경된 로그 출력

        return loggedInUser;
    } catch (error) {
        throw new Error('사용자 정보 가져오기 실패: ' + error.message);
    }
};

export const logoutUser = async (username) => {
    try {
        const storedUsers = await AsyncStorage.getItem('registeredUsers');
        const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];

        const userIndex = parsedUsers.findIndex((user) => user.username === username);
        if (userIndex === -1) {
            throw new Error('유효하지 않은 사용자입니다.');
        }

        // 로그아웃 상태로 변경
        const updatedUsers = parsedUsers.map((existingUser, index) => ({
            ...existingUser,
            loggedIn: index === userIndex ? false : existingUser.loggedIn
        }));
        await AsyncStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    } catch (error) {
        throw new Error('로그아웃 실패: ' + error.message);
    }
};

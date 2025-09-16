import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const router = useRouter();

  // 로그인 상태 확인
  if (!isLoggedIn) {
    // 로그인되지 않은 경우 로그인 페이지로 이동
    router.replace('/login'); // '/login' 경로로 이동
    return null; // 화면에 아무것도 렌더링하지 않음
  }

  // 로그인된 경우 설정 페이지 렌더링
  return (
    <View style={styles.container}>
      <Text style={styles.header}>설정 페이지</Text>
      <Button title="로그아웃" onPress={() => setIsLoggedIn(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
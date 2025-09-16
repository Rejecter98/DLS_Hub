import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // 로그인 로직 추가
    router.replace('/(tabs)/settings'); // 로그인 후 설정 페이지로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>로그인 페이지</Text>
      <Button title="로그인" onPress={handleLogin} />
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
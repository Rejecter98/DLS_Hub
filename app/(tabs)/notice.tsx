import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const notices = [
  { id: '1', title: '8월 이벤트 안내', content: '8월 한정 이벤트를 확인하세요!' },
  { id: '2', title: '앱 업데이트 공지', content: '최신 버전으로 업데이트하세요.' },
  { id: '3', title: '휴무일 안내', content: '추석 연휴 기간 동안 휴무합니다.' },
];

export default function NoticeScreen() {
  const renderNotice = ({ item }: { item: { id: string; title: string; content: string } }) => (
    <TouchableOpacity style={styles.noticeItem}>
      <Text style={styles.noticeTitle}>{item.title}</Text>
      <Text style={styles.noticeContent}>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>공지사항</Text>
      <FlatList
        data={notices}
        keyExtractor={(item) => item.id}
        renderItem={renderNotice}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  list: {
    paddingBottom: 16,
  },
  noticeItem: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
  },
  noticeContent: {
    fontSize: 14,
    color: '#666',
  },
});
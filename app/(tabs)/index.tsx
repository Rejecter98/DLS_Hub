// app/(tabs)/index.tsx
import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

const COLORS = {
  bg: "#F3F7FB",
  card: "#FFFFFF",
  text: "#1C1E21",
  sub: "#5D6B80",
  border: "#E5EEF7",
  primary: "#3B82F6",
  primaryDark: "#2563EB",
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 100 }}>
        <HeaderCard />
        <Greeting name="홍길동님" />
        <TodayTasks />
        <UpcomingCard />
        <NoticeSection />
      </ScrollView>
    </SafeAreaView>
  );
}

function HeaderCard() {
  return (
    <View
      style={{
        height: 76,
        backgroundColor: COLORS.card,
        borderRadius: 16,
        paddingHorizontal: 16,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primary,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "800" }}>실</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: "#0F172A", fontSize: 18, fontWeight: "800" }}>
            실력의 힘
          </Text>
          <Text style={{ color: COLORS.sub, fontSize: 12 }}>대시보드</Text>
        </View>
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "#EEF2FF",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: COLORS.border,
          }}
        >
          <Text style={{ fontSize: 16 }}>👤</Text>
        </View>
      </View>
    </View>
  );
}

function Greeting({ name }: { name: string }) {
  return (
    <View style={{ paddingHorizontal: 4, paddingTop: 16 }}>
      <Text style={{ color: COLORS.primaryDark, fontSize: 16, fontWeight: "700" }}>
        안녕하세요, {name}
      </Text>
    </View>
  );
}

function TodayTasks() {
  const [items, setItems] = useState([
    { id: "1", text: "독해 p.178 ~ 180 풀기", done: false },
    { id: "2", text: "데스노트 수, 목", done: false },
    { id: "3", text: "문법 p.85 ~ 88 풀기", done: false },
  ]);

  const toggle = (id: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));

  return (
    <Card style={{ marginTop: 16 }}>
      <Text style={{ fontSize: 16, fontWeight: "800", color: COLORS.text, marginBottom: 12 }}>
        오늘의 숙제
      </Text>
      {items.map((i, idx) => (
        <TaskRow key={i.id} item={i} onToggle={() => toggle(i.id)} last={idx === items.length - 1} />
      ))}
    </Card>
  );
}

function TaskRow({
  item,
  onToggle,
  last,
}: {
  item: { id: string; text: string; done: boolean };
  onToggle: () => void;
  last: boolean;
}) {
  return (
    <Pressable
      onPress={onToggle}
      style={{
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: last ? 0 : 1,
        borderBottomColor: COLORS.border,
      }}
    >
      <Checkbox checked={item.done} onPress={onToggle} />
      <Text
        style={{
          marginLeft: 10,
          color: item.done ? COLORS.sub : COLORS.text,
          textDecorationLine: item.done ? "line-through" : "none",
        }}
      >
        {item.text}
      </Text>
    </Pressable>
  );
}

function Checkbox({ checked, onPress }: { checked: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          borderWidth: checked ? 0 : 2,
          borderColor: COLORS.primary,
          backgroundColor: checked ? COLORS.primary : "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {checked && <Text style={{ color: "#fff", fontSize: 16 }}>✓</Text>}
      </View>
    </Pressable>
  );
}

function UpcomingCard() {
  return (
    <Card style={{ marginTop: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: "800", color: COLORS.text, marginBottom: 8 }}>
        예정된 보강
      </Text>
      <Text style={{ color: COLORS.sub }}>오늘 · 5:10 결석보강</Text>
    </Card>
  );
}

function NoticeSection() {
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ color: COLORS.primaryDark, fontWeight: "700", marginBottom: 8 }}>
        공지사항
      </Text>
      <View
        style={{
          backgroundColor: "#FFF7E6",
          paddingVertical: 12,
          paddingHorizontal: 14,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#FFE3B3",
        }}
      >
        <Text style={{ color: "#A16207", fontWeight: "800" }}>8월 이벤트: </Text>
        <Text style={{ color: "#A16207" }}>실력의힘 X 열품타! ..</Text>
      </View>
    </View>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: any }) {
  return (
    <View
      style={{
        backgroundColor: COLORS.card,
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
        ...style,
      }}
    >
      {children}
    </View>
  );
}

/* ---------------------------------------------------------
Option: 만약 탭 라벨을 한글로 바꾸고 싶다면 app/(tabs)/_layout.tsx 예시
(프로젝트에 이미 _layout.tsx가 있으면 아래를 참고만 하고, 교체는 주의!)

import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "홈", tabBarIcon: () => <Text>🏠</Text> }} />
      <Tabs.Screen name="explore" options={{ title: "학습", tabBarIcon: () => <Text>📚</Text> }} />
      <Tabs.Screen name="notice" options={{ title: "공지", tabBarIcon: () => <Text>📢</Text> }} />
      <Tabs.Screen name="settings" options={{ title: "설정", tabBarIcon: () => <Text>⚙️</Text> }} />
    </Tabs>
  );
}
*/

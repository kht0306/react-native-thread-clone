import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Modal() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>나는 모달입니다.</Text>
      <Pressable onPress={() => router.back()}>
        <Text>닫기</Text>
      </Pressable>
    </View>
  );
}

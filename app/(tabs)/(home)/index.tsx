import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  console.log("pathname: ", pathname);
  console.log("insets: ", insets);

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <BlurView style={styles.header} intensity={70}>
        <Image
          style={styles.headerLogo}
          source={require("@/assets/images/react-logo.png")}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/liogin")}
        >
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>
      </BlurView>
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={{ color: pathname === "/" ? "red" : "black" }}>
              For you
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => router.push("/following")}>
            <Text style={{ color: pathname === "/" ? "balck" : "red" }}>
              Following
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => router.push("/@kht0306/post/1")}>
            <Text>게시글1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => router.push("/@kht0306/post/2")}>
            <Text>게시글2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tab}>
          <TouchableOpacity onPress={() => router.push("/@kht0306/post/3")}>
            <Text>게시글3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  headerLogo: {
    width: 42,
    height: 42,
  },
  loginButton: {
    position: "absolute",
    right: 20,
    top: 0,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "white",
  },
});

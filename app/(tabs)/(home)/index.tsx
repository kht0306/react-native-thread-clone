import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { width, height } = Dimensions.get("window");
  const pixelRatio = PixelRatio.get();
  const isLoggedIn = false; // 로그인 상태

  console.log("pathname: ", pathname);
  console.log("insets: ", insets);
  console.log(
    `화면너비: ${width * pixelRatio}px, 화면높이: ${height * pixelRatio}px`,
  );

  /**
   * react-native의 css 관련 정리
   * - 선택자 및 우선순위 없음
   * - 미디어 쿼이 없음으로 width, height, pixelRatio 등을 이용하여 화면 크기에 따른 스타일링 필요
   * - hover, beofre, after 등과 같은 가상 선택자 없음
   **/

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
        {!isLoggedIn && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/liogin")}
          >
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        )}
      </BlurView>
      <View style={styles.tabContainer}>
        {isLoggedIn && (
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text style={{ color: pathname === "/" ? "red" : "black" }}>
                For you
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {isLoggedIn && (
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => router.push("/following")}>
              <Text style={{ color: pathname === "/" ? "balck" : "red" }}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
    width: 42, // dp, dip 단위
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

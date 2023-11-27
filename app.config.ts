import { ConfigContext, ExpoConfig } from "@expo/config";

const APP_VARIANT: "production" | "preview" =
  (process.env as any).APP_VARIANT || "production";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "custom-expo-updates-client",
    slug: "custom-expo-updates-client",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.outsung.customexpoupdatesclient",
    },
    android: {
      package: "com.outsung.customexpoupdatesclient",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      [
        "expo-updates",
        {
          username: "outsung",
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "e4b8ecd4-2be2-414d-b948-07f3de6e6c05",
      },
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: `https://mom-update.mommoss.com/api/update/expo/manifests/release/${APP_VARIANT}/latest`,
    },
  };
};

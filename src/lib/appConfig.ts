const requiredEnv = (key: string): string => {
  const value = import.meta.env[key] as string | undefined;
  return value ?? "";
};

export const APP_CONFIG = {
  name: requiredEnv("VITE_APP_NAME") || "DhanDiary",
  version: requiredEnv("VITE_APP_VERSION") || "",
  sizeMb: requiredEnv("VITE_APP_SIZE_MB") || "",
  minAndroid: requiredEnv("VITE_APP_MIN_ANDROID") || "",
  releaseDate: requiredEnv("VITE_APP_RELEASE_DATE") || "",
  downloads: {
    indus: requiredEnv("VITE_DOWNLOAD_INDUS_URL") || "",
    amazon: requiredEnv("VITE_DOWNLOAD_AMAZON_URL") || "",
    apk: requiredEnv("VITE_DOWNLOAD_APK_URL") || "",
    huawei:
      requiredEnv("VITE_DOWNLOAD_HUAWEI_URL") ||
      "https://url.cloud.huawei.com/yMQqh6QrTy",
  },
} as const;

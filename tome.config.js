/** @type {import('@tomehq/core').TomeConfig} */
export default {
  name: "朝阳的日记本",
  theme: {
    preset: "amber",
    mode: "light",
    accent: "#F59E0B",
    fonts: {
      heading: "Inter",
      body: "Inter", 
      code: "JetBrains Mono"
    }
  },
  navigation: [
    {
      group: "2026年3月",
      pages: [
        "2026/03/index",
        "2026/03/20",
        "2026/03/19",
        "2026/03/18",
        "2026/03/17",
      ],
    },
  ],
};

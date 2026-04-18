export const topicDisplayMap: Record<string, string> = {
  nextjs: "Next",
  "next-js": "Next",
  react: "React",
  vue: "Vue",
  "vue-3": "Vue",
  typescript: "TypeScript",
  javascript: "JavaScript",
  tailwindcss: "Tailwind",
  "tailwind-css": "Tailwind",
  shadcn: "Shadcn",
  "shadcn-ui": "Shadcn",
  "shadcn-vue": "Shadcn",
  "better-auth": "Better-auth",
  fumadocs: "Fumadocs",
  mdx: "MDX",
  swift: "Swift",
  swiftui: "SwiftUI",
  laravel: "Laravel",
  php: "PHP",
  "inertia-js": "Inertia.js",
  inertiajs: "Inertia.js",
  pest: "Pest",
  eslint: "ESLint",
  prettier: "Prettier",
  nestjs: "NestJS",
  nodejs: "Node.js",
  "node-js": "Node.js",
  "react-native": "React Native",
  expo: "Expo",
  zustand: "Zustand",
  ios: "iOS",
  android: "Android",
};

export function mapTopicsToTechnologies(topics: string[]): string[] {
  return topics
    .map((topic) => topicDisplayMap[topic.toLowerCase()])
    .filter((tech): tech is string => tech !== undefined);
}

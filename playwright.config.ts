import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:3030",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3030",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    {
      name: "desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile Pixel 5",
      use: { ...devices["Pixel 5"] },
    },
  ],
});

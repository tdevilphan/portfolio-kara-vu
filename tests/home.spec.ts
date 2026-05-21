import { expect, test } from "@playwright/test";

test("home page renders key sections and contact links", async ({ page }) => {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Vu Thi Bich Ngoc - Marketing Specialist",
    }),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: /download cv/i })).toHaveAttribute(
    "href",
    "/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf",
  );

  const selectedWorkLink = page.getByRole("link", {
    name: /view selected work/i,
  });
  await expect(selectedWorkLink).toBeVisible();
  await selectedWorkLink.click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();

  await expect(page.locator("#experience")).toBeVisible();
  await expect(page.locator("#work")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
  await expect(page.getByAltText("Vu Thi Bich Ngoc portrait")).toHaveAttribute(
    "src",
    /Banner%2520hero\.png/,
  );
  await expect(
    page.getByAltText("Vu Thi Bich Ngoc profile portrait"),
  ).toHaveAttribute(
    "src",
    /Portrait-transparent\.png/,
  );
  await expect(page.getByText("Get to know me")).toBeVisible();
  await expect(
    page.getByText(
      "Brand & Marketing Specialist with 5+ years of experience in integrated marketing, brand positioning, and content strategy.",
    ),
  ).toBeVisible();
  await expect(page.getByText("Vu Thi Bich Ngoc (Kara Vu)")).toBeVisible();
  await expect(page.getByText("21/12/1999")).toBeVisible();
  await expect(page.getByText("Thai Binh City")).toBeVisible();
  await expect(page.getByText("MARKETING PLANNER")).toBeVisible();
  await expect(page.getByText("5BIT AGENCY")).toBeVisible();
  await expect(page.getByText("DIGITAL MARKETING EXECUTIVE")).toBeVisible();
  await expect(page.getByText("AHT TECH")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Certification" }),
  ).toBeVisible();
  await expect(page.getByText("2021", { exact: true })).toBeVisible();
  await expect(
    page.getByText("Certificate level B2 of proficiency in English"),
  ).toBeVisible();
  await expect(
    page.getByText(
      "- Specialized in SEO content development and website optimization across WordPress, Magento, and Webflow platforms.",
    ),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Tool Stack" })).toBeVisible();

  await expect(page.locator('a[href*="zalo.me/0962605693"]')).toBeVisible();
  await expect(
    page.locator('a[href^="mailto:ngocvu.211299@gmail.com"]'),
  ).toBeVisible();

  expect(consoleErrors).toEqual([]);
});

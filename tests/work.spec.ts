import { expect, test } from "@playwright/test";

test("work detail page renders case study content", async ({ page }) => {
  await page.goto("/work/bcc-marketing-strategy-brand-positioning");

  await expect(
    page.getByRole("heading", {
      name: "Marketing Strategy & Brand Positioning",
    }),
  ).toBeVisible();
  await expect(page.getByText("Case study in progress")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Objective" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Role" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Channels" })).toBeVisible();

  await expect(page.getByRole("link", { name: /back to work/i })).toHaveAttribute(
    "href",
    "/#work",
  );
});

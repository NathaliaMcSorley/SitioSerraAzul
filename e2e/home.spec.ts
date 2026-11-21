import { expect, test } from "@playwright/test";

test("welcome page loads", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Find Your Place in the Country" }),
  ).toBeVisible();
});

test("mobile navigation opens without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});

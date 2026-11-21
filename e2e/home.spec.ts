import { expect, test } from "@playwright/test";

test("welcome page loads", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Vacation Farmhouse Rental Platform",
    }),
  ).toBeVisible();
});

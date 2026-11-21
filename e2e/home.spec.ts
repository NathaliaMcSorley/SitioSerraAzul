import { expect, test } from "@playwright/test";

test("welcome page loads", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Escape para o Campo" }),
  ).toBeVisible();
});

for (const width of [320, 375, 390, 430, 768, 1440]) {
  test(`responsive layout has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(overflow).toBe(false);
  });
}

test("mobile navigation opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close navigation" }).click();
  await expect(page.locator("#mobile-navigation")).toHaveCount(0);
});

test("availability calendar starts on the property-local month and limits browsing", async ({ page }) => {
  await page.goto("/");

  const monthHeading = page
    .locator("#disponibilidade")
    .getByRole("heading", { level: 3 });
  const nowParts = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    timeZone: "America/Sao_Paulo",
  }).formatToParts(new Date());
  const year = Number(nowParts.find((part) => part.type === "year")?.value);
  const month =
    Number(nowParts.find((part) => part.type === "month")?.value) - 1;
  const currentMonthLabel = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month, 1)));
  const expectedCurrentMonth =
    currentMonthLabel.charAt(0).toLocaleUpperCase("pt-BR") +
    currentMonthLabel.slice(1);
  await expect(monthHeading).toHaveText(expectedCurrentMonth);

  const previousMonth = page.getByRole("button", { name: "Mês anterior" });
  const nextMonth = page.getByRole("button", { name: "Próximo mês" });
  await expect(previousMonth).toBeDisabled();

  await nextMonth.focus();
  await page.keyboard.press("Enter");
  for (let month = 1; month < 12; month += 1) {
    await nextMonth.click();
  }

  const lastMonthLabel = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month + 12, 1)));
  const expectedLastMonth =
    lastMonthLabel.charAt(0).toLocaleUpperCase("pt-BR") +
    lastMonthLabel.slice(1);
  await expect(monthHeading).toHaveText(expectedLastMonth);
  await expect(nextMonth).toBeDisabled();
});

test("Sítio gallery loads every exterior photo", async ({ page }) => {
  const browserErrors: string[] = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") browserErrors.push(message.text());
  });

  await page.goto("/");

  const galleryPhotos = page.locator("#comodidades button img");
  await expect(galleryPhotos).toHaveCount(8);

  for (const image of await galleryPhotos.all()) {
    await expect(image).toBeVisible();
    expect(await image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
  }

  expect(browserErrors).toEqual([]);
});

test("lightbox supports Escape, close button, and focus restoration", async ({ page }) => {
  await page.goto("/");

  const opener = page.getByRole("button", { name: /Ampliar foto:/ }).first();
  await opener.click();
  const dialog = page.getByRole("dialog", { name: "Foto ampliada do Sítio Serra Azul" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("img")).toBeVisible();
  const closeButton = dialog.getByRole("button", { name: "Fechar foto ampliada" });
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();

  await opener.click();
  await page.getByRole("button", { name: "Fechar foto ampliada" }).click();
  await expect(dialog).not.toBeVisible();
});

test("lightbox closes when its backdrop is clicked", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  await page.getByRole("button", { name: /Ampliar foto:/ }).first().click();
  const dialog = page.getByRole("dialog", { name: "Foto ampliada do Sítio Serra Azul" });
  await expect(dialog).toBeVisible();
  const bounds = await dialog.boundingBox();
  expect(bounds).not.toBeNull();
  expect(bounds!.x > 8 || bounds!.y > 8).toBe(true);
  await page.mouse.click(8, 8);
  await expect(dialog).not.toBeVisible();
});

test("lightbox opens and closes with touch input", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
  });
  const page = await context.newPage();

  await page.goto("/");
  await page.getByRole("button", { name: /Ampliar foto:/ }).first().tap();

  const dialog = page.getByRole("dialog", { name: "Foto ampliada do Sítio Serra Azul" });
  await expect(dialog).toBeVisible();
  await page.getByRole("button", { name: "Fechar foto ampliada" }).tap();
  await expect(dialog).not.toBeVisible();

  await context.close();
});

for (const width of [320, 768, 1440]) {
  test(`lightbox image fits the viewport at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: /Ampliar foto:/ }).first().click();

    const imageBounds = await page
      .getByRole("dialog", { name: "Foto ampliada do Sítio Serra Azul" })
      .getByRole("img")
      .boundingBox();
    expect(imageBounds).not.toBeNull();
    expect(imageBounds!.x).toBeGreaterThanOrEqual(0);
    expect(imageBounds!.y).toBeGreaterThanOrEqual(0);
    expect(imageBounds!.x + imageBounds!.width).toBeLessThanOrEqual(width);
    expect(imageBounds!.y + imageBounds!.height).toBeLessThanOrEqual(844);
  });
}

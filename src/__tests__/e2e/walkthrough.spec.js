// @ts-check
import { test, expect } from '@playwright/test'
// import { videoTrial, hotDogTrials } from '../..';
// import { startTimeline, clickTarget } from "@jspsych/test-utils";
// import { initConfig, initRoarJsPsych, initRoarTimeline } from '../../config';

test.describe('Demo app walkthrough', () => {
      
    test('production test', async ({ page }) => {
        await page.goto('https://roar-mwe.web.app/');
        await page.locator('#input-0').click();
        await page.locator('#input-0').fill('0');
        await page.locator('#input-0').press('Tab');
        await page.locator('#input-1').fill('0');
        await page.locator('#input-1').press('Tab');
        await page.locator('#input-2').fill('0');
        await page.locator('#input-2').press('Tab');
        await page.getByRole('button', { name: 'Continue' }).press('Enter');
        await page.getByText('Progress Complete The experiment will switch to full screen mode. Click the butt').press('Tab');
        await page.getByRole('button', { name: 'Continue' }).press('Enter');

        // Get and click 'A' button

        await page.getByRole('button', { name: 'A' }).click()


        // hot dog trial
        expect(page.getByText('Is this a hot dog?')).toBeDefined()
        
        // Get 'Yes' button and click it x 3
        // await page.getByRole('button', { name: 'Yes' }).click()
        // await page.getByRole('button', { name: 'Yes' }).click()
        // await page.getByRole('button', { name: 'Yes' }).click()

        // await page.getByRole('button', { name: 'A' }).click()

        // expect(page.getByText('Participant ID:')).toBeDefined()
    });
})


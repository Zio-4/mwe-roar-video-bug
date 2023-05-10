// @ts-check
import { test, expect } from '@playwright/test'
// import { videoTrial, hotDogTrials } from '../..';
// import { startTimeline, clickTarget } from "@jspsych/test-utils";
// import { initConfig, initRoarJsPsych, initRoarTimeline } from '../../config';

test.describe('Demo app walkthrough', () => {
      
    test('production test', async ({ page }) => {

        await page.goto('https://roar-swr-demo.web.app/');
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByText('Press ANY KEY to continue').press('ArrowRight');
        await page.getByText('Press ANY KEY to continue').press('ArrowRight');
        
        await expect(page.getByText('Press ANY KEY to practice')).toBeVisible()
    });
})


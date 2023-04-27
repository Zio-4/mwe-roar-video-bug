import { videoTrial, hotDogTrials } from "../../index";
import { pressKey, simulateTimeline, startTimeline, clickTarget } from "@jspsych/test-utils";
import jsPsychHtmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

describe('Video trial tests', async () => {

    test("displays html stimulus", async () => {
        const { getHTML, expectFinished, displayElement } = await startTimeline([
          {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: "this is html",
          },
        ]);
    
        expect(getHTML()).toBe('<div id="jspsych-html-keyboard-response-stimulus">this is html</div>');
        pressKey("a");
        await expectFinished();
    });

    test("Can navigate from video to hotdog trial", async () => {
      await startTimeline([videoTrial, hotDogTrials])

      const btnContainer = document.getElementById("jspsych-video-button-response-button-0").children
      const btn = Array.from(btnContainer)[0]

      setTimeout(() => {
        clickTarget(btn)
      }, 4000)


      // expect to be on the hot dog trial
      const hotDogStim = document.getElementById("jspsych-html-button-response-stimulus")
      expect(hotDogStim).toBeDefined()
    })
})
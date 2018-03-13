/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ActionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/action-header/default-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});

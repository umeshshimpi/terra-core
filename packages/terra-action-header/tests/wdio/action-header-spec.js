/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ActionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/default-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Back', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/back-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Back Close', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/back-close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Keep Closed', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/keep-close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});

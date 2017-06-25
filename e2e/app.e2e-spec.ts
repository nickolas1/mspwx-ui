import { MspwxUiPage } from './app.po';

describe('mspwx-ui App', () => {
  let page: MspwxUiPage;

  beforeEach(() => {
    page = new MspwxUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { SpotigyappPage } from './app.po';

describe('spotigyapp App', () => {
  let page: SpotigyappPage;

  beforeEach(() => {
    page = new SpotigyappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

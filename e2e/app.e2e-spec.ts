import { CaseclosedPage } from './app.po';

describe('caseclosed App', function() {
  let page: CaseclosedPage;

  beforeEach(() => {
    page = new CaseclosedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

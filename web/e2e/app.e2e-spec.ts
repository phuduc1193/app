import { WebRefractoringPage } from './app.po';

describe('web-refractoring App', () => {
  let page: WebRefractoringPage;

  beforeEach(() => {
    page = new WebRefractoringPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

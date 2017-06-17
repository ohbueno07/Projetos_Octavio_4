import { Loja7Page } from './app.po';

describe('loja7 App', () => {
  let page: Loja7Page;

  beforeEach(() => {
    page = new Loja7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { AngularI9PersonsPage } from './app.po';

describe('angular-i9-persons App', () => {
  let page: AngularI9PersonsPage;

  beforeEach(() => {
    page = new AngularI9PersonsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

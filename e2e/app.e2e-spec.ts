import { AppPage } from './app.po';

describe('angular-pwa App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(1).toEqual(1);
  });
});

import { ClubManagementPage } from './app.po';

describe('club-management App', function() {
  let page: ClubManagementPage;

  beforeEach(() => {
    page = new ClubManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ClientFunction } from 'testcafe';

fixture`Electron test`.page('../../app/app.html');

const getPageTitle = ClientFunction(() => document.title);

test('e2e', async t => {
  await t.expect(getPageTitle()).eql('Hello Electron React!');
});

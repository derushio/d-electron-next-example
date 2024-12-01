/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const { BrowserWindow, app } = require('electron');
const { nextStart } = require('next/dist/cli/next-start');

async function createWindow() {
  try {
    process.chdir(path.dirname(app.getPath('exe')));
  } catch (e) {
    console.error(e);
  }

  void nextStart({
    port: 3000,
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  await win.loadURL('http://localhost:3000');
}

void app.whenReady().then(async () => {
  await createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

/* eslint-disable @typescript-eslint/no-require-imports */
const { BrowserWindow, app } = require('electron');
const { nextDev } = require('next/dist/cli/next-dev');

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  await nextDev({
    port: 3000,
  });
  await win.loadURL('http://localhost:3000');
}

void app.whenReady().then(async () => {
  await createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

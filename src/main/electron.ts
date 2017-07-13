require('fix-path')();
import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { initializeStore } from './InitializeStore';

app.once('ready', () => {

  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    center: true,
    autoHideMenuBar: true,
  });

  const store = initializeStore();

  mainWindow.loadURL(`file://${__dirname}/app.html`);
  mainWindow.once('close', () => app.quit());
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
});

﻿require('fix-path')();
import { app, BrowserWindow, Tray } from 'electron';
import { join } from 'path';
import { initializeStore } from './InitializeStore';

let tray: Electron.Tray;

app.once('ready', () => {
  tray = new Tray(join(__dirname, 'icons', 'cog.png'));

  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    center: true,
    autoHideMenuBar: true,
  });

  const store = initializeStore();

  const showWindow = () => {
    mainWindow.show();
    mainWindow.focus();
  };

  const toggleWindow = () => mainWindow.isVisible()
    ? mainWindow.hide()
    : showWindow();

  mainWindow.loadURL(`file://${__dirname}/app.html`);
  mainWindow.once('close', () => app.quit());
  mainWindow.once('ready-to-show', () => {
    tray.on('right-click', toggleWindow);
    tray.on('double-click', toggleWindow);
    tray.on('click', toggleWindow);
    showWindow();
  });
});
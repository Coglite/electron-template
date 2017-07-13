import { remote } from 'electron';
import * as React from 'react';
import { join } from 'path';

const { Tray, Menu } = remote;

interface Props {
  toggleWindow: () => void;
  icon: string;
}

export default class TrayMenu extends React.Component<Props, {}> {

  domNode: HTMLDivElement;
   tray: Electron.Tray;

  componentDidMount() {
    this.createTray();
    this.domNode.remove();
    this.domNode = null;
  }

  componentDidUpdate() {
    this.createTray();
  }

  componentWillUnmount() {
    if (!this.tray || this.tray.isDestroyed) {
      return;
    }
    this.tray.destroy();
    this.tray = null;
  }

  createTray() {
    if (this.tray) {
      this.tray.destroy();
      this.tray = null;
    }
    const tray = new Tray(this.props.icon);
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Toggle Window', click: this.props.toggleWindow },
      { type: 'separator' },
    ]);
    tray.setContextMenu(contextMenu);
    this.tray = tray;
  }

  render() {
    return <div ref={(div) => this.domNode = div}/>;
  }
}

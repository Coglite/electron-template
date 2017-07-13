import * as React from 'react';
import { Button } from 'reactstrap';

export interface Props {
  handleOnline: () => void;
  handleOffline: () => void;
}

export default class MainView extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    if (navigator.onLine) {
      this.props.handleOnline();
    } else {
      this.props.handleOffline();
    }
  }

  componentDidMount() {
    window.addEventListener('online', this.props.handleOnline);
    window.addEventListener('offline', this.props.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.props.handleOnline);
    window.removeEventListener('offline', this.props.handleOffline);
  }

  render() {
    return (
      <Button onClick={() => alert('pew')}/>
    );
  }
}

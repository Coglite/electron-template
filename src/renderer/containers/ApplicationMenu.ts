import { connect } from 'react-redux';
import { AppState } from '../../types';
import View from '../components/ApplicationMenu';

const mapStateToProps = (state: AppState) => ({
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(View);

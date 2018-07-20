import { connect } from 'react-redux';
import { MainDisplay } from './MainDisplay';

const mapStateToProps = state => {
  return {
    isCheckingOut: {}
  };
};
const mapDispatchToProps = dispatch => ({});

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDisplay);

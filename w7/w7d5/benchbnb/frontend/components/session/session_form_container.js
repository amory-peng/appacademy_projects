import { login, logout, signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {

  return({
    loggedIn: state.session.currentUser ? true: false,
    errors: state.session.errors,
    formType: ownProps.location.pathname.slice(1)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

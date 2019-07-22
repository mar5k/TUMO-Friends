import { connect } from 'react-redux'
import { withRouter } from "react-router";
import NavigationBar from './NavigationBar';
import { logoutUser } from '../../redux/actions';
const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return{
    logoutUser:(email,password)=>{
      dispatch(logoutUser({email,password}));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));

import { connect } from 'react-redux'

import Network from './Network';

const mapStateToProps = state => ({
  user: state.user.data,
  withUser: state.network.withUser
});

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Network);

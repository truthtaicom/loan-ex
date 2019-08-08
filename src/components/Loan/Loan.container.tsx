import { connect } from 'react-redux';
import Loan from './Loan';
import { getLoanListRequest, payNowWithAction } from './Loan.action';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state: any) => ({
  loading: state.loanReducer.loading,
  data: state.loanReducer.data,
  error: state.loanReducer.error
});

const mapDispatchToProps = {
  getLoanListRequest,
  payNowWithAction
}

export default withRouter<any, any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Loan)
);

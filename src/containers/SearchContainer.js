import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { queryFetching } from "../actions/searchActions";
import Search from "../components/Search";

const mapDispatchToProps = (dispatch, state) => ({
  onSubmit: query => {
    state.history.push(`/${query.query}`);
    dispatch(queryFetching(query))
  }
});

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: "SearchForm"
  })(Search));
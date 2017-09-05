import React from "react";
import { Field } from "redux-form";
import _ from "lodash";

const SearchForm = ({ handleSubmit }) => {
    return(
      <form onSubmit={handleSubmit} className="search-form" onKeyDown={
        ev => {
          if(_.includes([ "Enter" ], ev.key)){
            ev.preventDefault();
            handleSubmit();
          }
        }
      }>
        <div className="input-group">
          <Field
            name="query"
            component="input"
            type="text"
            placeholder="Search for ..."
            className="form-control"
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="submit"
            >
              Search
            </button>
          </span>
        </div>
      </form>
    )
};

export default SearchForm;
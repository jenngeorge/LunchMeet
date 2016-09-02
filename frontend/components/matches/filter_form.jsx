const React = require('react');

const _handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({currentUser, role, updateFilter, updateMatches}) => (
  <div>
    <form onSubmit={updateMatches} className="filter-form">
      <label> Looking to meet
        <select id="role" value={role}
          onChange={_handleChange('role', updateFilter)}
          defaultValue={currentUser.looking_for}>
          <option value="developer">Developers</option>
          <option value="designer" >Designers</option>
          <option value="sales" >Salespeople</option>
          <option value="recruiter" >Recruiters</option>
          <option value="business" >Business/Operations People</option>
        </select>
      </label>
      <input type="submit" value="Submit" className="submit-btn"/>
  </form>
  </div>
);

export default FilterForm;

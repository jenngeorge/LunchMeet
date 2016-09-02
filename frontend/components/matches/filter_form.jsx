const React = require('react');

const _handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({currentUser, lookingForRole, updateFilter}) => (
  <div>
    <span className="filter">Filter results:</span>

    <label> Looking to meet
      <select id="role" value={lookingForRole}
        onChange={_handleChange('lookingForRole', updateFilter)}
        defaultValue={currentUser.looking_for}>
        <option value="developer">Developers</option>
        <option value="designer" >Designers</option>
        <option value="sales" >Salespeople</option>
        <option value="recruiter" >Recruiters</option>
        <option value="business" >Business/Operations People</option>
      </select>
    </label>
  </div>
);

export default FilterForm;

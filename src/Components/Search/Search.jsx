import styles from './Search.module.css';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Search = ({ value, onChange }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      Phone book search
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  </div>
);

Search.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

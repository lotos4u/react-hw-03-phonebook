import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

class FilterForm extends Component {

    state = {
        filter: '',
    };

    handleChangeFilter = (e) => {
        this.setState({
            filter: e.target.value,
        }, () => {
            this.props.onFilter(this.state.filter);
        });
    }

    render() {
        return (
            <div className={styles.formContainer}>
                <label>
                    Filter contacts by name
                    <input type='text'
                           value={this.state.filter}
                           onChange={this.handleChangeFilter}/>
                </label>
            </div>
        );
    }
}

FilterForm.propTypes = {
    onFilter: PropTypes.func.isRequired,
}

export default FilterForm;
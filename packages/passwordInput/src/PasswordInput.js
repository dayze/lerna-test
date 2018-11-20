import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash, faLock} from '@fortawesome/pro-regular-svg-icons';
import Input from 'input';

/**
 *  Generic password input
 */
class PasswordInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayPassword: false,
        };
    }

    togglePassword() {
        this.setState({isDisplayPassword: !this.state.isDisplayPassword});
    }

    // helper methods
    renderTypeOfInput() {
        return this.state.isDisplayPassword ? 'text' : 'password';
    }

    renderIconEyePassword() {
        return this.state.isDisplayPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>;
    }

    renderEyeIcon() {
        if (this.props.iconEye === true || typeof this.props.iconEye === 'undefined') {
            return (
                <span className="passwordEye"
                      onClick={() => this.togglePassword()}>
                    {this.renderIconEyePassword()}
                </span>
            );
        }
    }

    render() {
        return (
            <Fragment>
                <Input
                    className={this.props.className}
                    name={this.props.name}
                    type={this.renderTypeOfInput()}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}/>
                <label htmlFor={this.props.name}>
                    <FontAwesomeIcon icon={faLock}/>
                </label>
                {this.renderEyeIcon()}
            </Fragment>
        );
    }
}

PasswordInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    iconEye: PropTypes.bool,
    className: PropTypes.string,
};
export default PasswordInput;

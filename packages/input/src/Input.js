import React, {PureComponent} from 'react';
//import '/static/assets/scss/layout/form/_forms.scss';

class Input extends PureComponent {
    render() {
        const {value, placeholder, name, id, type} = this.props;
        return (
            <div className="input-icon">
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={e => this.props.onChange(name, e)}
                />
            </div>
        );
    }
}

export default Input;
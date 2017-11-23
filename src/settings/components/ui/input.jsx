import { h, Component } from 'preact';
import './input.scss';

class Input extends Component {

  renderText(props) {
    let inputClassName = props.error ? 'input-error' : '';
    return <div className='settings-ui-input'>
      <label
        type='text'
        htmlFor={props.id}
      >{ props.label }</label>
      <input type='text' className={inputClassName} {...props} />
    </div>;
  }

  renderRadio(props) {
    let inputClassName = props.error ? 'input-error' : '';
    return <div className='settings-ui-input'>
      <label>
        <input type='radio' className={inputClassName} {...props} />
        { props.label }
      </label>
    </div>;
  }

  renderSelect(props) {
    return <div className='settings-ui-input'>
      <label
        htmlFor={props.id}
      >{ props.label }</label>
      <select name={this.props.name} value={this.props.value} {...this.props}>
        {
          props.options.map((kv) => {
            return <option key={kv[0]} value={kv[0]}>{ kv[1] }</option>;
          })
        }
      </select>
    </div>;
  }

  renderTextArea(props) {
    let inputClassName = props.error ? 'input-error' : '';
    return <div className='settings-ui-input'>
      <label
        htmlFor={props.id}
      >{ props.label }</label>
      <textarea className={inputClassName} {...props} />
      <p className='settings-ui-input-error'>{ this.props.error }</p>
    </div>;
  }

  render() {
    let { type } = this.props;

    switch (this.props.type) {
    case 'text':
      return this.renderText(this.props);
    case 'select':
      return this.renderSelect(this.props);
    case 'radio':
      return this.renderRadio(this.props);
    case 'textarea':
      return this.renderTextArea(this.props);
    default:
      console.warn(`Unsupported input type ${type}`);
    }
    return null;
  }
}

export default Input;

import React from 'react';
import PropTypes from 'prop-types';

function ViewToggle(props) {

  return (
    <div className='view-toggle'>
      <style jsx>{`
        .view-toggle {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 100%;
          max-width: 100%;
        }

        .toggle-label {
          font-size: 0.6em;
          margin: 5px;
        }

        // The following styling for the toggle switch is courtesy https://www.w3schools.com/howto/howto_css_switch.asp

        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }

        /* Hide default HTML checkbox */
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        /* The slider */
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: .4s;
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: #2196F3;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      `}
      </style>

      <div className='toggle-label'>
        <p>Patron View</p>
      </div>

      <div>
        <form>
          <label className='switch'>
            { props.employeeView ? <input type='checkbox' checked onChange={props.onViewChange} /> : <input type='checkbox' onChange={props.onViewChange} />}
            <span className='slider round'></span>
          </label>
        </form>
      </div>

      <div className='toggle-label'>
        <p>Employee View</p>
      </div>

    </div>
  );
}

ViewToggle.propTypes = {
  onViewChange: PropTypes.func,
  employeeView: PropTypes.bool
};

export default ViewToggle;

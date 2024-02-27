import './radioSwitch.css'
function RadioSwitch() {
  return (
    <div className="toggle-switch">
  <input className="toggle-input" id="toggle" type="checkbox"/>
  <label className="toggle-label" htmlFor="toggle"></label>
</div>

  );
}

export default RadioSwitch;

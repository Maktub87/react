import ClockLoader from 'react-spinners/ClockLoader';
import './SpinnerStyles.css';
const override = {
  display: 'block',
  margin: 'auto',
  borderColor: '#ebe4f3',
};

function Spinner({ isLoading }) {
  return (
    <div className="containerSpinner">
      <ClockLoader
        color="#36d7b7"
        loading={isLoading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
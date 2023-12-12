import './Loading.css';

const Loading = (props?: Record<string, any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="loading" viewBox="0 0 33 6" {...props}>
    <circle cx={3} cy={3} r={3} fill="currentColor" />
    <circle cx={15} cy={3} r={3} fill="currentColor" />
    <circle cx={27} cy={3} r={3} fill="currentColor" />
  </svg>
);

export default Loading;

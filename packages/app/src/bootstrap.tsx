import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);

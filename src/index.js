import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*//การสร้าง Component Class
class HelloComponent extends React.Component{
  render(){
    return <h1>สวัสดี Component แรกของเราครับผม</h1>
  }
}
*/
/*  //การสร้าง Component function
function HelloComponent() {
  return <h1>สวัดดี Component ครับผม</h1>
}
*/
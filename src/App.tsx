import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "antd";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">Button</Button>
        <Button type="primary" className="-back-button">abc</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer
          columns={[
            {
              icon: (
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
              ),
              title: '语雀',
              items:[{
                title:"ddd"
              }]
            },
          ]}
          bottom="Made with ❤️ by AFX"
      />,
      mountNode,
    </div>
  );
}

export default App;

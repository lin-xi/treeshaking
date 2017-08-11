import ReactDOM from 'react-dom'

import {Button} from 'antd';

ReactDOM.render(
  <div>
    <Button onClick={onClick} />
  </div>
, document.body);

function onClick() {
  console.log('click');
}
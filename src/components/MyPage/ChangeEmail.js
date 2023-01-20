import { React, useRef } from 'react';
import css from './ChangeEmail.module.scss';

function ChangeEmail() {
  // const [change, setChange] = useState({});
  // const [email, setEmail] = useState();
  const emailValue = useRef();

  // useEffect(() => {
  // const token = localStorage.getItem('token');
  // fetch('http://localhost:8000/getme', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     authorization:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjY5MTc3NDEwfQ.-a6NQWcjWgwOF-Z5Z7HSM2NwhKCxTVkuFdCxxA1khDE',
  //   },
  // })
  //   .then(response => response.json())
  //   .then(result => setChange(result.userInfo));
  // }, []);

  const handlePut = event => {
    event.preventDefault();
    fetch('http://localhost:8000/account', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ email: emailValue.current.value }),
    });
  };
  // let email = change.email;
  return (
    <div className={css.changeMail}>
      <input
        name="changeMail"
        id="changeMail"
        type="text"
        placeholder="변경할 메일을 입력하세요."
        ref={emailValue}
        // onChange={e => setEmail(e.target.value)}
        // value={email}
      />
      <button type="button" onClick={handlePut}>
        전송
      </button>
    </div>
  );
}

export default ChangeEmail;

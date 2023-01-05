import React from 'react';

import css from './Footer.module.scss';

function Footer() {
  return (
    <div className={css.container}>
      <div className={css.footerWrapper}>
        <div className={css.logo} />
        <div className={css.info}>
          <p>저스트잇 고객센터 : 02-1234-1234</p>
          <p>(평일 09:00 - 18:00, 점심시간 12:00 - 13:00, 주말·공휴일 휴무)</p>
          <p>이메일 : help@justit.co.kr / Fax : 02-1234-1234</p>
          <p>(주)저스트잇, 우 : 01234, 서울특별시, 대표 : 저스트잇</p>
          <p>
            사업자등록 : 123-45-67890 / 직업정보제공사업 : 서울 2022-5 /
            통신판매업 : 제 2022호
          </p>
          <p>Copyright (c) (주)저스트잇. All rights reserved.</p>
          <ul className={css.iconList}>
            <li>
              <i class="fa-brands fa-instagram" />
            </li>
            <li>
              <i class="fa-brands fa-youtube" />
            </li>
            <li>
              <i class="fa-brands fa-facebook" />
            </li>
            <li>
              <i class="fa-brands fa-google-play" />
            </li>
            <li>
              <i class="fa-brands fa-apple" />
            </li>
          </ul>
        </div>
        <div className={css.leftNav}>
          <ul className={css.navList}>
            <li>서비스소개</li>
            <li>기업서비스</li>
            <li>저스트잇Team</li>
          </ul>
        </div>
        <div className={css.rightNav}>
          <ul className={css.navList}>
            <li>이용약관</li>
            <li>
              <b>개인정보처리방침</b>
            </li>
            <li>자주묻는질문 FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

INSERT INTO position
(position_name) 
VALUES 
('서버/백엔드 개발자'),
('프론트엔드 개발자'),
('웹 풀스택 개발자'),
('안드로이드 개발자'),
('IOS 개발자');

INSERT INTO tech_stack
(tech_stack_name) 
VALUES 
('Java'),('Spring Boot'),('Node.js'),('Python'),('Django'),
('PHP'),('C++'),('C#'),('AWS'),('MySQL'),('Oracle'),
('React'),('Vue.js'),('JavaScript'),('TypeScript'),('Svelte'),
('HTML5'),('CSS3'),('AngularJS'),('jQuery'),('Kotlin'),('RxJava'),
('Swift'),('Objective-C'),('Rxswift'),('SwiftUI'),('Xcode');

INSERT INTO tag
(tag_name) 
VALUES 
('4.5일제'),('재택근무'),('유연근무제'),('시차출근제'),('인센티브'),
('맛있는간식냠냠'),('지원 응답이 빠른 기업'),('맥북으로개발'),('닉네임사용'),
('수평적조직'),('누적투자금100억이상'),('스톡옵션제공'),('도서구입비지원');

INSERT INTO company
(company_name, location) 
VALUES 
('레드캡스', '서울특별시 강남구 학동로 426'),('티사각형', '서울특별시 서초구 남부순환로 2584'),('네이트랩', '서울특별시 강남구 학동로 426'),
('직원임금', '서울특별시 구로구 가마산로 245'),('매코기프트','서울특별시 관악구 관악로 145'),('어스오즈', '경기도 성남시 분당구 분당로 50'),
('물병', '경기도 성남시 수정구 수정로 283'),('피어리스어스', '서울특별시 마포구 월드컵로 212'),('짜잇','서울특별시 마포구 월드컵로 212'),
('안내모빌리티', '서울특별시 서초구 남부순환로 2584'),('다온에이아이', '서울특별시 서초구 남부순환로 2584'),('SKA기술', '경기도 의왕시 시청로'),
('선택과집중', '인천광역시 연수구 원인재로 115'),('로터리', '서울특별시 강남구 학동로 426'),('노드추가', '경기도 성남시 분당구 분당로 50'),
('미나리', '서울특별시 구로구 가마산로 245'),('어덜트기술', '서울특별시 금천구 시흥대로73길 70'),('에투올', '인천광역시 연수구 원인재로 115'),
('물결과파도', '서울특별시 영등포구 당산로 123'),('택배상자', '경기도 성남시 분당구 분당로 50'),('소나기나비', '경기도 성남시 분당구 분당로 50'),
('편리', '서울특별시 서초구 남부순환로 2584'),('충성', '서울특별시 서초구 남부순환로 2584'),('마지막한끼', '서울특별시 마포구 월드컵로 212'),
('우리의 수업', '서울특별시 마포구 월드컵로 212'),('도리두리', '울특별시 마포구 월드컵로 212'),('초록개구리', '서울특별시 구로구 가마산로 245'),
('쿠브모', '서울특별시 금천구 시흥대로73길 70'),('바둑이농장', '서울특별시 강남구 학동로 426'), ('빠른별', '서울특별시 강남구 학동로 426');

INSERT INTO company_tag
(tag_id, company_id) 
VALUES 
(1,1),(2,1),(3,1),(13,2),(11,2),(10,3),(1,3),(3,3),(5,3),(6,3),
(2,4),(7,4),(9,5),(8,5),(10,5),(11,6),(14,6),(3,6),(4,6),(7,7),
(10,7),(13,8),(4,9),(6,9),(12,10),(13,10),(14,10),(15,10),(15,11),(5,11),
(15,12),(13,13),(10,13),(4,13),(5,14),(3,14),(11,15),(3,15),(5,15),(6,16),
(9,16),(7,17),(4,17),(3,18),(1,19),(1,20),(11,21),(7,21),(12,21),(14,22),
(14,24),(7,24),(12,25),(4,25),(6,26),(12,26),(5,26),(7,26),(1,26),(2,26),
(2,27),(7,28),(9,28),(10,29),(13,29),(10,30),(14,30),(7,30),(2,30),(5,30);

INSERT INTO image
(company_id, image) 
VALUES 
('1', 'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
('1', 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
('2', 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
('2', 'https://plus.unsplash.com/premium_photo-1665203427126-f1f2fa815738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
('2', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('3', 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
('3', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('3', 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
('3', 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('4', 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('4', 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('4', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('5', 'https://plus.unsplash.com/premium_photo-1661284806850-b709cb1262b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('5', 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('6', 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('6', 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('6', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('7', 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('7', 'https://images.unsplash.com/photo-1585675705484-c2239e62a395?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('8', 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('8', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('8', 'https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('9', 'https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('9', 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('9', 'https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('10', 'https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('10', 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('11', 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('11', 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('12', 'https://images.unsplash.com/photo-1564987474689-808d86f7ea9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('12', 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('12', 'https://images.unsplash.com/photo-1594235048794-fae8583a5af5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('13', 'https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('13', 'https://images.unsplash.com/photo-1575886876763-10ea19d18fac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('14', 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('14', 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQzfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('15', 'https://images.unsplash.com/photo-1497366616365-e78dd380d3dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('15', 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('15', 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUyfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('16', 'https://images.unsplash.com/photo-1568359415705-47e98104af04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU5fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('16', 'https://plus.unsplash.com/premium_photo-1661767704365-35de91cf1fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY2fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('16', 'https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc5fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('17', 'https://images.unsplash.com/photo-1594235046256-90e5572fd5f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg1fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('17', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('18', 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg5fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('18', 'https://images.unsplash.com/photo-1507904953637-96429a46671a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('19', 'https://images.unsplash.com/photo-1558959356-2f36c7322d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEyfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('19', 'https://images.unsplash.com/photo-1480944657103-7fed22359e1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjExfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('19', 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('20', 'https://images.unsplash.com/photo-1558274862-fb21bb917cd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM5fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('20', 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('20', 'https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('21', 'https://images.unsplash.com/photo-1556586038-29f26c3ceb20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('21', 'https://images.unsplash.com/photo-1560264350-1a8891f44df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUxfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('22', 'https://images.unsplash.com/photo-1541960071727-c531398e7494?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU4fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('22', 'https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY1fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('23', 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjczfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('23', 'https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgxfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('23', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk0fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('24', 'https://images.unsplash.com/photo-1582641547274-2770615179ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkzfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('24', 'https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA1fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('24', 'https://images.unsplash.com/photo-1521649415036-659258dc424f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAyfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('25', 'https://images.unsplash.com/photo-1603202662747-00e33e7d1468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('25', 'https://images.unsplash.com/photo-1551834317-9ddfd4ec7069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE5fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('25', 'https://images.unsplash.com/photo-1604328704120-91e8d2fdc188?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzMwfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('26', 'https://images.unsplash.com/photo-1520032484190-e5ef81d87978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIzfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('26', 'https://images.unsplash.com/photo-1560821630-1a7c45c3286e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzI5fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('27', 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQzfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('27', 'https://images.unsplash.com/photo-1606836559739-7b1d9fbf8a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzU0fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('28', 'https://images.unsplash.com/photo-1558788833-5189550e2f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzYzfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('28', 'https://images.unsplash.com/photo-1550071593-fd1bdaf1f93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY2fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('29', 'https://images.unsplash.com/photo-1565262353533-b183c89a4f33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzYyfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('29', 'https://images.unsplash.com/photo-1507307080003-b453948f5528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY1fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('30', 'https://images.unsplash.com/photo-1559136656-3db4bf6c35f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzg1fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('30', 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzkyfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'),
('30', 'https://images.unsplash.com/photo-1585399090149-de01d4c28e70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDYxfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');

INSERT INTO education
(education_name) 
VALUES 
('고등학교'),('대학(2,3년)'),('대학교(4년)'),('대학원(석사)'),('대학원(박사)'),('무관');

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
(1, '백엔드 개발자 모집', 
'
주요업무
• 클라우드(AWS) 상 서비스 백엔드 개발
　- 농가 모니터링, 제어 서비스 백엔드 고도화 및 안정화
　- 농가 생산 관리 서비스 백엔드 개발
　- 기타 농축산업에서 필요한 서비스
• 공공 데이터를 활용한 서비스 기능의 고도화

자격요건
• Backend Engineer 경력 4년 이상이신 분
• MySQL 활용 경력 4년 이상이신 분
• AWS EC2, RDS, S3, Lambda 등의 AWS 기반 백엔드 개발 경력 2년 이상이신 분
• GraphQL API 백엔드 개발 1년 이상이신 분
• 필요기술
　- Language : Javascript, Node.js
　- OS : Linux
　- Container : Docker
　- Public Cloud : AWS
　- Git/Github, Jira, Notion 등의 협업 툴을 기반으로 한 개발 경험이 있으신 분
• 프론트엔드 개발자, 데이터 사이언티스트, 비즈니스 오너, 프로덕트 오너 등 다양한 배경 및 경험을 가진 팀원들과 소통 능력이 있으신 분

우대사항
• AWS IoT 기반 서비스 개발 및 운영 경험이 있으신 분
• 우대 기술
　- Language : TypeScript
　- Framework
　- Fastify
　- ORM
　- Prisma, TypeORM
• MSA 기반 서비스 설계 및 개발 경험이 있으신 분
• AGTECH(농업) 및 푸드에 대한 관심이 있으신분',
'4', '10년', 5, '상시', 40, 1);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
(1, '백엔드 개발자를 찾습니다!', 
'주요업무
• Web 기반 SW 테스트 자동화 시스템의 백엔드 개발 및 운영

자격요건
• Java 및 Spring 프레임워크에 대한 기술 이해도가 있으신 분
• REST API 설계 및 개발 경험이 있으신 분
• RDMBS 기반의 DB 설계 및 개발 경험이 있으신 분

우대사항
• Selenium, Appium 등의 테스트 프레임워크 활용 경험이 있으신 분
• RPA, 자동화 산업에 대한 경험이 있거나 관심이 많은 분
',
'신입', '10년', 2, '2022-12-10', 20, 2);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
(2, '프론트엔드 개발자를 찾습니다!', 

'주요업무
【오시면 이런 업무를 하게 되실 거예요!】
• Angular, React 기반 웹 프론트엔드 개발
• Jenkins, Docker, AWS 기반 서비스 배포 및 운영
• 운영중인 서비스의 유지보수 및 관리

【개발환경】
• 사용언어: TypeScript, JavaScript, HTML, CSS, Sass, Pug
• 개발환경 및 도구: Angular, React, Webpack, Npm, Git

자격요건
【이런 분을 찾고 있어요!】
• HTML,JavaScript, CSS 등의 웹 프론트엔드 기본 지식을 보유하신 분 (필수)
• Angular, React 들 중 다뤄보신 경험이 있는 분 (필수)
• 웹프론트엔드 개발 경력이 2년 이상인 분
• DOM 렌더링 관련 관심이 많으신 분
• 다른 팀과 협업 및 커뮤니케이션에 능숙하신 분
• 성장하는 스타트업에서, 함께 의미있는 결과를 만들어내고 싶은 열정이 가득한 분

우대사항
【이런 분이면 더 좋아요!】
• 자기 분야에 대한 자발적 학습에 열정적인 분
• 포트폴리오를 제출해 주신 분 또는 노션, 깃헙, 개발블로그 등을 운영중인 분
• 사전질문 답변을 함께 제출해 주시는 분',
3, '5년', 5, '상시', 36, 3);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
(2, '프론트엔드 경력 개발자', 
'주요업무
• 마이스토어 클라이언트 뷰 (Next.js) 개발
• 마이스토어 클라이언트 뷰 (JS SDK) 개발

** 마이스토어란?
• 고객이 직접 상품을 구매할 수 있는 스토어로, 가입/로그인부터 장바구니 및 상품 구매 등의 다양한 기능을 제공합니다.

[기술 스택]
• HTML, CSS, JavaScript, TypeScript, React, Next.js, Recoil, React-Query, React-Hook-Form
• Git, GitHub

자격요건
[기본 요건]
• 나이: 제한없음
• 학력: 컴퓨터공학 학사 이상 학위 혹은 그에 준하는 경력 보유자 가능
• 연차: 3년차 이상

[자격 요건]
• React, Vue, Svelte 등 SPA 개발에 능숙하신 분
• Typescript 실무 사용 경험이 있으신 분
• CSS in JS 를 활용한 스타일링 경험이 있으신 분
• 프론트엔드 TDD 개발 경험이 있으신 분

[일할 때에는]
• 자사 서비스는 Spring Boot 와 React(with TypeScript)를 주로 사용합니다.
• 모놀리식 아키텍쳐보다 MSA를 선호합니다.
• 개발 할 때는 Github, Jetbrain Tool, AWS 등을 주로 사용합니다.
',
'3', '8년', 3, '2022-11-30', 50, 3);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
(2, 'Front-end 개발자 모집', 
'주요업무
• 서버 관리에 필요한 다양한 기능의 Web interface 개발
• 남자는 병역필 또는 면제인 분
• 해외 여행에 결격 사유가 없는 분
• 컴퓨터 공학 혹은 관련 전공 학부 졸업, 또는 이와 동등한 경력이 있으신 분
• 컴퓨터 시스템에 대한 이해가 있으신 분
• Web GUI 개발이 가능하신 분

우대사항
• Linux 환경에서 Front-end 개발 경험
• Rest API 개발 경험
• react.js 개발 경험
',
'신입', '10년', 3, '2022-11-27', 60, 5);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
(3, '블록체인, 풀스택 개발자', 
'
주요업무
• P2E 게임 및 메타버스 서비스와 블록체인을 연결하는 서비스 플랫폼 개발
• 블록체인 지갑 앱 개발
• DEX 서비스 개발
• NFT 마켓 플레이스 개발
• Defi 서비스 개발
• Layer2, sidechain 등 체인 구축을 위한 기술 개발

자격요건
• 블록체인 기술과 시장에 대한 관심 혹은 이해가 있으신 분
• node.js를 이용한 웹 프론트엔드 혹은 백엔드 서버 프로그래밍 경험이 있으신 분

우대사항
• typescript 또는 golang 언어 사용 경험이 있으신 분
• solidity 를 이용한 스마트 컨트랙트 개발 경험이 있으신 분
• react.js 를 이용한 웹 프론트엔드 개발 경험이 있으신 분
• web3js 를 이용한 dApp 개발 경험이 있으신 분
• 마이크로서비스 아키텍처에 대한 이해도가 높으신 분
• ERC20, ERC721, ERC1155 를 기본으로 meta transaction, upgradeable contract 등을 망라한 ERC/EIP 에 대한 knowledge 가 있으신 분
• 토큰 경제 및 NFT 시장에 대한 이해도가 높으신 분
• 성공에 대한 의지와 열정을 보유하신 분
',
'신입', '10년', 5, '상시', 100, 6);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
(3, '자바스크립트 활용 웹개발자', 
'
주요업무
• 카지노 딜러 교육용 웹 개발
• 골프피플 웹 개발

자격요건
• javascript 활용 가능자
• java 활용 가능자

우대사항
• 반응형 웹/앱 개발 경력자
',
'1', '10년', 5, '상시', 10, 7);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
(3, 'WEB 풀스택 개발자 채용', 
'
주요업무
• 플랫폼 추가 개발 및 유지보수
• 프론트/백엔드 고도화 및 안정화 작업
• 서비스 모니터링
• 관련 서비스 AWS 관리 및 유지보수

자격요건
• 최소 1년 이상 유관 업무 경력 또는 그에 준하는 능력
• 프론트엔드/백엔드 풀스택 개발 및 프로젝트 경험 보유
• React, Springboot 사용에 능숙하신분

우대사항
• Python 개발 경험
',
'1', '4년', 2, '상시', 120, 8);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
('3', '열정있는 웹 풀스텍 개발자', 
'
주요업무
• SI사업부의 외부 고객사 프로젝트(라이프스타일 또는 이커머스 위주의 웹/앱) 개발 또는 유지보수
• 내부에서 진행 중인 자체 프로젝트 유지보수
• 신사업으로 준비 중인 프로젝트 신규 개발

자격요건
• UI 개발 (html, css, javascript) 관련 경력
• 백엔드 개발 (php) 관련 경력

우대사항
• Vue.js / Flutter / Laravel 사용 경험
',
'1', '10년', 5, '상시', 12, 9);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
('3', '안드로이드 경력 개발자', 
'
주요업무
• 카플랫 비즈 안드로이드 앱 개발 및 운영
• 사용자 중심의 차별화된 서비스 설계 및 구현

자격요건
• Android OS에 대한 높은 이해도를 가진 분
• Kotlin Flow, AndroidX Jetpack, ACC 개발 경험
• 상용 서비스 운영 및 개발 경험
• Git 사용에 익숙하신 분
• 일이 되는 방향으로 논리적이고 적극적으로 소통할 수 있는 분
• 스스로 동기부여하고 성장할 수 있는 분
• 필요한 지식을 빠르게 파악하고, 습득하는 데에 두려움이 없는 분

우대사항
• Clean Architecture 및 MVVM, MVI 설계 경험
• 커스텀 UI/UX 컴포넌트 개발 경험
• REST API 에 대한 이해 및 개발 경험
• 테스트/배포 자동화 경험
• 사용자와 비지니스 도메인을 이해하려 노력하는 분
• UI/UX 에 높은 가치를 두는 분
• 최신 웹 개발 동향에 관심이 많은 분
• 면허 소지 및 운전 가능하신 분
• 모빌리티 산업에 관심이 많은 분
',
'1', '4년', 5, '2022-11-30', 101, 10);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
('2', '리액트 프론트 개발자 모집', 
'
주요업무
• No.1 농민앱 팜모닝 서비스의 리액트 네이티브 개발 및 운영
• 플레이스토어/앱 스토어 및 CodePush 배포 관리
• 안드로이드/iOS 플랫폼 별 앱 최적화
• ReScript, React를 활용한 함수형 프로그래밍

자격요건
• 리액트 네이티브를 활용한 프로덕션 서비스 2년 이상 개발/운영 경험
• 리액트 영역과 네이티브 영역에 대한 이해
• 타 직군과의 원활한 커뮤니케이션 능력 및 협업 능력

우대사항
• 안드로이드/iOS 네이티브 앱 개발 경험
• CodePush 등을 이용한 배포 관리 경험
• 함수형 프로그래밍에 대한 높은 이해 수준
• AGRITECH(농업) 및 푸드, 커머스에 대한 관심
',
'2', '10년', 5, '상시', 30, 1);

INSERT INTO posts
(position_id, title, content, career_min, career_max, education_id, due_date, view, company_id) 
VALUES 
('2', '프론트엔드 개발자 채용 공고', 
'
주요업무
• 웹서비스 프론트엔드 개발
• 데이터 비쥬얼라이징 작업

자격요건
• Vue.js or React.js 프론트엔드 경력자
• RestFul API 연동 SPA개발 경험자

우대사항
• Nodejs 백엔드 경험자
• React,React-native 경험
• 차트를 활용한 데이터 시각화 경험자
',
'1', '4년', 5, '상시', 50, 11),
('5', 'iOS APP 개발', 
'
주요업무
• ios 앱 개발
• 블루투스연동 앱개발
• MQTT서비스와 연동
• MySQL서비스와 연동
• Web서비스 연동
• flutter로 협업

자격요건
• 기획 역량 필요
• iOS 개발 경험
• 이공계, 공대 졸업자

우대사항
• 자기주도적 개발역량이 있는 분
• 소프트웨어 배포경험이 있는 분(현재 사용중인)
• 전공자(컴퓨터공학과, 전자공학과)
',
'신입', '3년', 2, '상시', 50, 12),
('4', '안드로이드 개발자 채용 ', 
'
주요업무
• 주차대행을 위한 잇차의 유저앱 및 링커앱 안드로이드 개발

자격요건
• 경력 1년 이상의 MVP, MVVM, MVC 등의 디자인 패턴 적용에 대한 경험이 있으신 분
• 기획/디자인 등 다양한 직군과 함께 문제를 정의, 해결할 수 있는 협업 능력이 있으신 분

우대사항
• 상용 Android 앱 개발과 Google Play 운영 및 관리 경험을 보유하신 분
• UI 테스트 자동화 경험이 있으신 분
• 취미가 개발이신 분
',
'1', '5년', 5, '2022-11-30', 56, 13),
('1','자바 백엔드 개발자 채용 공고', 
'
주요업무
• 수백만 고객이
• 수십만 디자인리소스를 찾고, 탐색하고 추천 받아
• 안정적으로 사용하고
• 시시각각 작업상태를 자동저장할 수 있도록
세부 업무는 스프린트 회고/체크인에서 협의하면서 정할게요

자격요건
• Java, Spring Framework 기반 백엔드 개발 5년 이상 실무 경험
• 자료구조, 운영체제, 컴퓨터아키텍처, OOP에 대한 깊은 이해 필수
• 클린 코드 작성 능력

우대사항
• 프로그래밍 지식 및 경험
• RESTful API 설계 및 개발 경험
• DB 쿼리 최적화 경험, 데이터베이스 운영 경험
• TDD에 대한 이해도와 UT 기반의 견고한 코딩
• Git Flow, CI/DI, 이슈관리시스템, 위키 등 협업/자동화 도구를 친숙도
• Redis 등의 캐싱 방법을 통한 대용량 트래픽 분산 구현능력
• 개발 문서 작성 및 정릭
• AWS 등 클라우드 개발 환경 경험
• 소규모 팀 운영/협업 경험
',
'5', '12년', 3, '상시', 40, 14),
('1', '백엔드(node.js) 개발', 
'
주요업무
• 데이터 솔루션의 목적과 니즈에 대한 이해를 기반으로 데이터 모델과 API를 설계/개발합니다.
• 마켓플레이스별 이커머스 데이터를 어떻게 효율적, 효과적으로 수집하고 처리할지를 고민합니다.
• 대용량 데이터를 처리하기 위한 인프라구조와 기술에 대해서 연구합니다.
• 이커머스 도메인에 대한 이해를 높이기 위해 연구합니다.
• 신규 기술을 적극적으로 테스트하고 실제로 적용할 수 있습니다.
• 코딩 모범 사례 및 표준 수준을 도입하고 코드 리뷰를 수행합니다.

[사용하시게 될 기술들]
• GraphQL, Apollo
• Express
• Redshift, Postgres
• AWS
• Git, Github
• Serverless

자격요건
• Node 기반 서버 개발 경험 또는 프로젝트 참가 경험
• 다양한 솔루션 및 툴을 활용하여 개발 프로세스를 단순화하고 최적화하는 역량
• 서버 기술에 대한 이해
• TDD 적용 경험
• AWS기반 배포 경험

우대사항
• GraphQL을 이용한 서비스 개발 경험
• Node 환경 개발 경험
• AWS & Docker 인프라 개발 경험
',
'신입', '10년', 5, '상시', 100, 15),
('1', '개발자 모집 (백엔드)', 
'
주요업무
마이크로한 업무목록을 열거하는 대신 목표를 공유할게요
• 수백만 고객이
• 수십만 디자인리소스를 찾고, 탐색하고 추천 받아
• 안정적으로 사용하고
• 시시각각 작업상태를 자동저장할 수 있도록
세부 업무는 스프린트 회고/체크인에서 협의하면서 정할게요

자격요건
• Java, Spring Framework 기반 백엔드 개발 5년 이상 실무 경험
• 자료구조, 운영체제, 컴퓨터아키텍처, OOP에 대한 깊은 이해 필수
• 클린 코드 작성 능력

우대사항
• 프로그래밍 지식 및 경험
• RESTful API 설계 및 개발 경험
• DB 쿼리 최적화 경험, 데이터베이스 운영 경험
• TDD에 대한 이해도와 UT 기반의 견고한 코딩
',
'신입', '4년', 5, '상시', 53, 16),
('1', '노드 개발자 채용 공고', 
'
주요업무
• PG 금융 서비스
• 간편 송금 솔루션 제작
• 보드 게임 제작
• 메신저 제작

자격요건
• PG 서비스 (백엔드1)
- Java

• 간편송금 서비스 (백엔드1)
- Node

• 보드게임 제작 (백엔드2)
- Java

• 메신저 (백엔드2)
- Node

우대사항
• nest.js 프레임워크 개발 경험
• docker 기반 개발 경험
• aws 사용 경험
• TeraFrom 인프라 구축 경험
',
'신입', '10년', 5, '상시', 52, 17),
('1', '클라우드 백엔드 엔지니어 채용', 
'
주요업무
• AWS Cloud의 Microservices Architecture, 분산 시스템 설계 및 구현
• Authentication & Authorization 설계 및 구현
• 시스템의 기타 요구사항에 대한 아키텍처 및 기술 요소 설계 및 구현

자격요건
• ﻿웹 어플리케이션 개발 (Java, Javascript, C#, Python 등의 언어기반 프레임워크 활용)
• 데이터베이스에 대한 이해와 활용 (RDBMS, NOSQL)
• AWS, GCP, AZURE 등의 클라우드 서비스 활용
• Git을 이용한 코드관리
•﻿ 지속적인 통합/배포(CI/CD) 활용
• Message Queue 활용 (Kafka, RabbitMQ, ZeroMQ 등)
• Docker Container 기반 서비스

우대사항
• ﻿물류 시스템 개발경험
• Logistics/Intra-logistics 자동화의 이해 (스마트물류)
• 팀 단위 소프트웨어 개발 경험
• 원만한 의사소통 능력
',
'1', '10년', 5, '상시', 50, 18),
('5', 'iOS 앱 개발자', 
'
주요업무
• iOS 앱 개발

자격요건
• Swift 이용 iOS/iPad 앱 개발 경험 / 3년 이상
• Restful API 이용 서비스 형태 앱 개발 경험

우대사항
• MVP / MVVM 패턴 등의 이해
• Git / Github, Slack 등의 협업, 소통 및 코드리뷰 경험자
',
'신입', '5년', 5, '상시', 56, 19),
('3', 'IT 개발자 채용', 
'
주요업무
1) 물류 IT 시스템 공통 기능/Architecture 담당자 (0명)
• (필수) Appl. 공통 모듈 프로그램 개발/운영 (Java 기반 Web Front-end/Back-end)
• (필수) Spring 기반 Framework/ CI-CD 관리
• AWS Cloud Infra 운영 관리, DBA (DB관리 및 Mysql tuning 능통자)
• Mobile (Android/iOS) 개발 능통
• 업무 자동화(RPA solution/Python) 개발 경험자

2) WMS(Warehouse Management System, 창고관리시스템) 담당자 (0명)
• Web기반 WMS시스템 개발/운영

3) FIS(Forwarding Management System, 국제운송(포워딩)시스템) 담당자 (0명)
• Web기반 FIS시스템 개발/운영

자격요건
• 대졸 이상 (4년제 이상)
• 성별 무관

우대사항
• 물류시스템 경험자 우대
• 장애인 우대
• 보훈 대상자 우대
',
'신입', '4년', 3, '2022-11-30', 40, 20);



INSERT INTO posts_tech_stack
(posts_id, tech_stack_id) 
VALUES 
(1, 15),(1, 9),(1, 10),(1, 14),(2, 1),
(2, 2),(3, 14),(3, 9),(3, 19),(3, 12),
(3, 13),(4, 14),(4, 12),(4, 13),(4, 15),
(4, 2),(4, 9),(4, 17),(4, 18),(5, 12),
(5, 14),(6, 3),(6, 15),(7, 1),(7, 14),
(8, 2),(8, 10),(8, 9),(8, 14),(8, 12),
(9, 17),(9, 14),(9, 18),(9, 13),(9, 10),
(9, 6),(9, 9),(10, 21),(10, 1),(11, 12),(11, 14);

INSERT INTO posts_tech_stack
(posts_id, tech_stack_id) 
VALUES 
(12, 1),(12, 21),(12, 23),(13, 1),(13, 21),
(14, 1),(14, 21),(15, 1),(15, 2),(15, 9),
(16, 3),(16, 9),(16, 10),(17, 3),(17, 9),
(18, 3),(18, 14),(19, 1),(19, 9),(20, 14),
(20, 19),(20, 20);
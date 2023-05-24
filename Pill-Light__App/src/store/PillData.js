export const PillData = [
  {name: '사리돈', key: 1, image: require('../../assets/사리돈.png'), notice: true, info: '효능 : 두통, 치통, 발치후 동통(통증), 인후통, 귀의 통증, 관절통, 신경통, 요통, 근육통, 견통(어깨결림), 타박통, 골절통, 염좌통(삠통증), 월경통(생리통), 외상통의 진통 등'},
  {name: '써스펜', key: 2, image: require('../../assets/써스펜.png'), notice: false, info: '효능 : 감기의 제증상(콧물, 코막힘, 재채기, 인후통, 오한, 발열, 두통, 관절통, 근육통)의 완화 등'},
  {name: '아스피린', key: 3, image: require('../../assets/아스피린.png'), notice: true, info: '효능 : 심근경색, 뇌경색, 불안정형 협심증,  관상동맥 우회술(CABG) 또는 경피경관 관상동맥 성형술(PTCA) 후 혈전 생성 억제 등'},
  {name: '인데놀정', key: 4, image: require('../../assets/인데놀정.png'), notice: false, info: '효능 : 기외수축(상실성, 심실성), 발작성빈맥의 예방, 빈맥성심방세동, 발작성심방세동, 동빈맥, 협심증, 고혈압, 비후성대동맥판하협착증, 크롬친화세포종, 갑상샘중독증의 보조요법 등'},
  {name: '타이레놀', key: 5, image: require('../../assets/타이레놀.png'), notice: false, info: '효능 : 감기로 인한 발열 및 동통(통증), 두통, 신경통, 근육통, 월경통, 염좌통(삔 통증), 치통, 관절통, 류마티양 동통(통증) 등'},
  {name: '베아제', key: 6, image: require('../../assets/베아제.png'), notice: true, info: '효능 : 소화불량, 식욕감퇴(식욕부진), 과식, 체함, 소화촉진, 소화불량으로 인한 위부팽만감 등'},
  {name: '훼스탈 플러스', key: 7, image: require('../../assets/훼스탈플러스.png'), notice: true, info: '효능 : 소화불량, 식욕감퇴(식욕부진), 과식, 체함, 소화촉진, 위부팽만감, 위산과다, 속쓰림, 위부불쾌감, 구역, 구토, 위통, 신트림'},
]

export function getPillName(key) {
  const pill = PillData.find(item => item.key === key);
  return pill ? pill.name : '';
}

export function setPillName(key, newName) {
  const updatedPillData = PillData.map(item => {
    if (item.key === key) {
      return { ...item, name: newName };
    }
    return item;
  });
  PillData = updatedPillData;
}
/*
getPillName으로 이름 가져오는 코드 예시

const pillKey = 1;
const pillName = getPillName(pillKey);
console.log(pillName); // 해당 알약의 이름을 출력합니다.


setPillName으로 알약의 이름 업데이트 코드 예시

const pillKey = 1;
const newPillName = '새로운 알약 이름';
setPillName(pillKey, newPillName);
console.log(PillData); // 업데이트된 알약 데이터를 출력합니다.



*/ 
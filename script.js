// 데이터 저장용 배열
let employeeLogs = [];

// 폼 제출 이벤트 처리
document.getElementById('employee-log-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // 폼 데이터 수집
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const task = document.getElementById('task').value;

  // 데이터 배열에 저장
  employeeLogs.push({ 날짜: date, 카테고리: category, 업무내용: task });

  // 폼 초기화
  this.reset();
  alert('기록이 저장되었습니다.');
});

// 엑셀로 내보내기 버튼 클릭 이벤트
document.getElementById('export-btn').addEventListener('click', function () {
  if (employeeLogs.length === 0) {
    alert('내보낼 데이터가 없습니다.');
    return;
  }

  // JSON 데이터를 워크시트로 변환
  const worksheet = XLSX.utils.json_to_sheet(employeeLogs);

  // 워크북 생성
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '직원 기록');

  // 엑셀 파일 다운로드
  XLSX.writeFile(workbook, '직원_기록.xlsx');
});

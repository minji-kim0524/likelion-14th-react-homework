import './Output.css'

/**
 * Output 컴포넌트 - input 입력값이 조건 불충족했을 경우 에러메세지 표시
 * @param {string}  message 에러메세지
 * @param {boolean} isVisible 요소 렌더링 여부
 */
export default function Output({ message, isVisible }) {
  if (!isVisible) return // isVisible이 false 이면 함수 실행 ❌

  // isVisible이 true 일 때 나타낼 내용
  return (
    <div className="outputContainer">
      <output className="formOutput">{message}</output>
    </div>
  )
}

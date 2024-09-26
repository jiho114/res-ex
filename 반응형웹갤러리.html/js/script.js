//문서가 전부 로드 됐을 때 실행

window.addEventListener("load", ()=>{
  const grid = new Isotope("section",{
    itemSelector : "article", //배치할 요소명
    columnWidth : "article", //넓이값을 구할 요소명
    transitionDuration : "0.5s", // 화면 재배치시 요소가 움직이는 속도
  })
  //클릭할 모든 버튼 요소를 변수에 저장
  const btns = document.querySelectorAll("main ul li")
  //버튼의 갯수만큼 반복을 돌림
  for(let el of btns){ // btns배열의 요소를 하나씩 뽑아서
    // 갯수만큼 반복문을 실행
    //각 버튼 요소에 클릭 이벤트를 연결
    el.addEventListener("click",(e)=>{
      //e는 event 객체
      e.preventDefault();
      //윈도우의 기본 기능인 링크 기능을 제거
      // 태그에 적용하는 속성값을 읽어오는 메서드 getAttribute
      //e.currentTarget = 이벤트가 발생된 요소
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      //클릭이벤트가 발생한 li 요소의 자손 요소 중 a 요소를 선택하여 href 속성값을 끌어옴
      //console.log(sort)
      //grid에 저장된 결과값을 불러와 재정렬 기능을 연결
      grid.arrange({
        filter : sort
      })

      //다시 모든 버튼의 갯수만큼 반복을 돌림
      //클릭한 버튼의 하이라이트
      for(let el of btns){
        //각 버튼의 클래스 명인 on을 제거
        el.classList.remove("on")
      }
      //클릭한 대상만 선택해서 클래스명 on을 추가하여 활성화
      e.currentTarget.classList.add("on")
    })
  }
})


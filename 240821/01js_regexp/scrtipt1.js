const phonemNumber = document.querySelector(`input[type="text"]`)
const warningMessage = document.querySelector("#warningMessage")

phonemNumber.addEventListener("keyup",function(e){
  const numbervalue = this.value;
  const trimNumber = numbervalue.replace(/-/g,"") // 대시를 없는공란으로 대처해달라. " "는 띄어쓰기를 말하는 것이니 적을 때 스페이스버튼 조심

  //1)const ragexp = /^[0][0-9]$/ // 반드시 0으로 시작하고 끝나는숫자는 0-9

  //1. 11자리 숫자 거나 10자리 숫자의 전화번호가 나올 수 있다. 
  //2. 현자 앞에숫자는 0으로 고정되고 [0-9]{9,10}는 0-9까지 숫자가 9~10개까지 이어진다는 의미
  // 따라서 9자리에서 10자리의 숫자만 지정해주면 된다.

  // const regxp = /^[0]\d{8,9}[0-9]$/.test(trimNumber)
  const regxp = /^[0][0-9]{9,10}$/.test(trimNumber) //이걸 권장
  // const regxp = /^0\d[0-9]{8,9}$/.test(trimNumber)

  if(regxp === false) {
    warningMessage.innerText = "전화번호의 형식에 맞춰 작성해주세요"
  } else {
    warningMessage.innerText = ""
  }
  
})
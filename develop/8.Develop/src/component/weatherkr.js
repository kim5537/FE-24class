const weatherDescKo = (id) => {
  let weatherName;

  switch (id) {
    case 201:
      weatherName = "가벼운 비를 동반한 천둥구름";
      break;
    case 200:
      weatherName = "비를 동반한 천둥구름";
      break;
    case 202:
      weatherName = "폭우를 동반한 천둥구름";
      break;
    case 210:
      weatherName = "약한 천둥구름";
      break;
    case 211:
      weatherName = "천둥구름";
      break;
    case 212:
      weatherName = "강한 천둥구름";
      break;
    case 221:
      weatherName = "불규칙적 천둥구름";
      break;
    case 230:
      weatherName = "약한 연무를 동반한 천둥구름";
      break;
    case 231:
      weatherName = "연무를 동반한 천둥구름";
      break;
    case 232:
      weatherName = "강한 안개비를 동반한 천둥구름";
      break;
    case 300:
      weatherName = "가벼운 안개비";
      break;
    case 301:
      weatherName = "안개비";
      break;
    case 302:
      weatherName = "강한 안개비";
      break;
    case 310:
      weatherName = "가벼운 적은비";
      break;
    case 311:
      weatherName = "적은비";
      break;
    case 312:
      weatherName = "강한 적은비";
      break;
    case 313:
      weatherName = "소나기와 안개비";
      break;
    case 314:
      weatherName = "강한 소나기와 안개비";
      break;
    case 321:
      weatherName = "소나기";
      break;
    case 500:
      weatherName = "약한 비";
      break;
    case 501:
      weatherName = "중간 비";
      break;
    case 502:
      weatherName = "강한 비";
      break;
    case 503:
      weatherName = "매우 강한 비";
      break;
    case 504:
      weatherName = "극심한 비";
      break;
    case 511:
      weatherName = "우박";
      break;
    case 520:
      weatherName = "약한 소나기 비";
      break;
    case 521:
      weatherName = "소나기 비";
      break;
    case 522:
      weatherName = "강한 소나기 비";
      break;
    case 531:
      weatherName = "불규칙적 소나기 비";
      break;
    case 600:
      weatherName = "가벼운 눈";
      break;
    case 601:
      weatherName = "눈";
      break;
    case 602:
      weatherName = "강한 눈";
      break;
    case 611:
      weatherName = "진눈깨비";
      break;
    case 612:
      weatherName = "소나기 진눈깨비";
      break;
    case 615:
      weatherName = "약한 비와 눈";
      break;
    case 616:
      weatherName = "비와 눈";
      break;
    case 620:
      weatherName = "약한 소나기 눈";
      break;
    case 621:
      weatherName = "소나기 눈";
      break;
    case 622:
      weatherName = "강한 소나기 눈";
      break;
    case 701:
      weatherName = "박무";
      break;
    case 711:
      weatherName = "연기";
      break;
    case 721:
      weatherName = "연무";
      break;
    case 731:
      weatherName = "모래 먼지";
      break;
    case 741:
      weatherName = "안개";
      break;
    case 751:
      weatherName = "모래";
      break;
    case 761:
      weatherName = "먼지";
      break;
    case 762:
      weatherName = "화산재";
      break;
    case 771:
      weatherName = "돌풍";
      break;
    case 781:
      weatherName = "토네이도";
      break;
    case 800:
      weatherName = "구름 한 점 없는 맑은 하늘";
      break;
    case 801:
      weatherName = "약간의 구름이 낀 하늘";
      break;
    case 802:
      weatherName = "드문드문 구름이 낀 하늘";
      break;
    case 803:
      weatherName = "구름이 거의 없는 하늘";
      break;
    case 804:
      weatherName = "구름으로 뒤덮인 흐린 하늘";
      break;
    case 900:
      weatherName = "토네이도";
      break;
    case 901:
      weatherName = "태풍";
      break;
    case 902:
      weatherName = "허리케인";
      break;
    case 903:
      weatherName = "한랭";
      break;
    case 904:
      weatherName = "고온";
      break;
    case 905:
      weatherName = "바람부는";
      break;
    case 906:
      weatherName = "우박";
      break;
    case 951:
      weatherName = "바람이 거의 없는";
      break;
    case 952:
      weatherName = "약한 바람";
      break;
    case 953:
      weatherName = "부드러운 바람";
      break;
    case 954:
      weatherName = "중간 세기 바람";
      break;
    case 955:
      weatherName = "신선한 바람";
      break;
    case 956:
      weatherName = "센 바람";
      break;
    case 957:
      weatherName = "돌풍에 가까운 센 바람";
      break;
    case 958:
      weatherName = "돌풍";
      break;
    case 959:
      weatherName = "심각한 돌풍";
      break;
    case 960:
      weatherName = "폭풍";
      break;
    case 961:
      weatherName = "강한 폭풍";
      break;
    case 962:
      weatherName = "허리케인";
      break;
    default:
      weatherName = "알 수 없는 날씨";
  }

  return weatherName;
};

export default weatherDescKo;

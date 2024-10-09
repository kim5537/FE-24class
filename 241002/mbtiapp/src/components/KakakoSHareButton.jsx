import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
const { Kakao } = window;

const KakakoSHareButton = ({ data }) => {
  const url = "https://catmbti-site.netlify.app/";
  const resultURL = window.location.href;
  //다시 index로 돌려보기.

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("3ce5da7e0735bc814bda05338f33389d");
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비 집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: `${url}${data.image}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러 가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button variant="light" onClick={shareKakao}>
      카카오톡 공유
    </Button>
  );
};

export default KakakoSHareButton;

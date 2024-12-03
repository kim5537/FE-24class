/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.css";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null); //타입은 정해져 있다.
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
      //위치 정의가 가능함
    }
  }, []);
  return createPortal(
    <dialog
      onClose={() => router.back()} //esc를 눌러도 돌아간다.
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.modal}
      ref={dialogRef}
    >
      {children}
    </dialog>,
    //dialog 태그로 만든다. 인터셉팅한 페이지를 보여주겠다는 의미. - 이 컴포넌트를 돔에서 제어해야한다. 그리고 컴포넌트가 실행될 때 찾아 올 예정이다.
    document.getElementById("modal-root") as HTMLElement
    //null 과 HTMLElement 둘 다 형태를 가질 수 있어 null은 되지 않는다는 에러가 뜨기때문에 타입 단언을 해주어야한다.
  );
};

export default Modal;

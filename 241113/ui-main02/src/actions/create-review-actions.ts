/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import delay from "@/util/delay";
//"use server" =서버 액션을 하게 시킨것
import { revalidatePath } from "next/cache";

export const createReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const content: FormDataEntryValue | null | undefined = formData
    .get("content")
    ?.toString();
  const author: FormDataEntryValue | null | undefined = formData
    .get("author")
    ?.toString();

  if (!content || !author || !bookId) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 확인 해주세요",
    };
  }

  try {
    await delay(2000);
    const respons = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      }
    );

    if (!respons.ok) {
      throw new Error(respons.statusText);
    }
    // revalidatePath(`book/${bookId}`);
    // revalidatePath(`book/[id]`, "page");
    // revalidatePath(`/(with-searchbar)`, "layout");
    // revalidatePath("/", "layout");
    revalidatePath(`review-${bookId}`);
  } catch (err) {
    console.log(err);
    return {
      status: true,
      error: `리뷰 저장에 실패했습니다. ${err}`,
    };
  }
};

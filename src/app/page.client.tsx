"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

import GameIllustration from "../../public/images/game-illustration.svg";
import SearchIllustration from "../../public/images/search-illustration.svg";
import StudyIllustration from "../../public/images/study-illustration.svg";
import FormIllustration from "../../public/images/form-illustration.svg";
import SoftBankVentures from "../../public/images/soft-bank-ventures.jpg";

const ClientPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-neutral-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="px-4 py-12">
            <h2 className="font-bold text-4xl">
              게임만 하는 우리아이 게임으로 영어공부하자
            </h2>
            <p className="text-neutral-700 mt-2">
              게임을 통해서 김군은 영어에 흥미를 붙여서 MIT 공대에 들어가서
              마이크로소프트에서 일하고 있습니다.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded">
              무료체험
            </button>
          </div>
          <div>
            <Image
              src={GameIllustration}
              alt="게임만 하는 우리아이"
              height={300}
            />
          </div>
        </div>
      </div>
      <article className="flex flex-col max-w-7xl mx-auto mt-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold">Why COWCOW?</h2>
          <Image src={SearchIllustration} alt="공부하는 김군" height={300} />
          <p className="text-neutral-700 mt-2">
            어떻게? 김군은 글로벌 기업인 마이크로소프트에서 일 할 수 있었을까요?{" "}
            <br />
            그것은 바로 카우카우 게임메이트와 함께 하는 게임을 통해 영어와
            게임에 흥미를 가지게 되었고, 자연스럽게 영어와 코딩을 알게되었기
            때문입니다.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-24">
          <h2 className="text-4xl font-bold">수업 방법</h2>
          <Image src={StudyIllustration} alt="수업방법" height={300} />
          <p className="text-neutral-700 mt-2">
            1. 아이가 하고 싶은 게임을 선택합니다. <br />
            2. 원하는 게임을 하면서 영어로 대화합니다.
            <br />
            3. 게임이 끝나면 수업 AI 리포트를 통해 복습합니다.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-24">
          <h2 className="text-4xl font-bold">
            &quot;아들 김군이 이제 영어로 게임을 해요!&quot;
          </h2>
          <p className="text-neutral-700 mt-2">
            게임만 하는 아들이 걱정이였는데, 이제 영어로 게임을 하니깐
            영어공부를 하는 것 같아서 안심이에요~
          </p>
          <div className="mt-4 flex flex-row gap-8">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">
                  우리 딸은 말이에요...
                </h3>
                <p className="text-neutral-700 mt-2">
                  리그오브레전드 대회에 나가서 우승해서 이제는 10억 연봉을
                  받는다니깐요
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">
                  우리 강아지가 영어로 말해요!
                </h3>
                <p className="text-neutral-700 mt-2">
                  우리집 뽀삐에게 영어게임 교육을 했더니 영어로 밥달라고 하고
                  자기 밥도 주문한다니깐요?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-24">
          <h2 className="text-4xl font-bold">스폰서</h2>
          <div className="mt-12">
            <Image src={SoftBankVentures} alt="소프트뱅크" width={200} />
          </div>
        </div>
      </article>
      <div className="bg-neutral-50 mt-24">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="px-4 py-12">
            <h2 className="font-bold text-4xl">선생님이 하고 싶다면?</h2>
            <p className="text-neutral-700 mt-2 mb-4">
              영어/일본어를 할 수 있고 게임을 좋아하면 지금 지원해보세요.
            </p>
            <Link
              href="https://tally.so/r/3NlEPp"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded"
            >
              지원하기
            </Link>
          </div>
          <div>
            <Image src={FormIllustration} alt="지원하기" height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;

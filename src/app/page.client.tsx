"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

import GameIllustration from "../../public/images/landing/game-illustration.svg";
import OurTeachers from "../../public/images/landing/our-teachers.png";
import BookIllustration from "../../public/images/landing/book-illustration.svg";
import TimeIllustration from "../../public/images/landing/time-illustration.svg";
import AIllustration from "../../public/images/landing/a-illustration.svg";
import TalkIllustration from "../../public/images/landing/talk-illustration.svg";
import ChatIllustration from "../../public/images/landing/chat-illustration.svg";
import Game from "../../public/images/landing/game.png";
import ApplyIllustration from "../../public/images/landing/apply-illustration.svg";
/**
 * 랜딩 페이지 가이드, tailwind
 * content: max-w-7xl
 * color-primary: blue-500
 * h2: text-4xl, font-bold > mobile 2xl
 * h3: text-2xl, font-semibold > mobile xl
 * p: text-xl text-base
 * m: 4, 8, 12 ...
 * illustration: height-400
 */
const ClientPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-neutral-50">
        <div className="flex md:flex-row flex-col justify-between items-center max-w-7xl mx-auto">
          <div className="px-4 py-12">
            <h2 className="font-bold md:text-4xl text-2xl">
              <p>영어를 가장 즐겁게 배우는 방법</p>
              <p className="mt-4">
                신나게 게임하면서 끊임없이 영어로 이야기해요!
              </p>
            </h2>
            <div className="text-neutral-700 mt-8 md:text-xl text-base">
              <p>명문대학, 대기업 출신 선생님과 함께 게임을 즐기다보면</p>
              <p className="mt-4">
                부담과 두려움을 사라지고, 자연스럽게 영어를 배울 수 있습니다.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="https://tally.so/r/nWEdEP"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-12 rounded"
              >
                선착순 한정 9,900원
              </Link>
              <p className="text-sm mt-4 text-red-500">
                (해당 프로모션은 정해진 수량에 따라 선착순 마감될 수 있습니다.)
              </p>
            </div>
          </div>
          <div>
            <Image
              src={GameIllustration}
              alt="억지 영어 공부는 그만!"
              className="md:block hidden"
              height={400}
            />
          </div>
        </div>
      </div>
      <article className="flex flex-col max-w-7xl mx-auto  px-4">
        <div className="flex flex-col items-center text-center mt-24">
          <h2 className="font-bold md:text-4xl text-2xl">Our Teachers</h2>
          <p>COWCOW를 통해 우리 아이가 만날 선생님은 다음과 같습니다.</p>
          <div className="md:mt-16 mt-8">
            <Image src={OurTeachers} alt="our-teachers" height={500} />
          </div>
          <p className="md:text-2xl text-xl md:mt-20 mt-12">
            1. COWCOW 선생님들은 최고 수준의 검증된 선생님들만 계십니다. COWCOW
          </p>
          <p className="md:text-2xl text-xl md:mt-8 mt-4">
            2. 선생님들은 아이들이 게임을 통한 영어 교육에 진심입니다. COWCOW
          </p>
          <p className="md:text-2xl text-xl md:mt-8 mt-4">
            3. 선생님들은 평소에도 게임하면서 외국인들과 소통하는
            선생님들입니다.
          </p>
        </div>
      </article>
      <article className="bg-neutral-900 mt-24">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="px-4 md:py-24 py-12">
            <h2 className="text-neutral-100 md:text-4xl text-2xl font-bold">
              이제는 억지로 공부하지 마세요.
            </h2>
            <div className="text-neutral-100 text-xl">
              <p className="md:mt-12 mt-8">매번 외우도록 공부시키셨나요?</p>
              <p className="mt-4">아이가 막상 말하려고 하면 머뭇거리나요?</p>
              <p className="mt-4">이제는 아이들을 즐겁게 공부시키세요. </p>
            </div>
            <div className="text-blue-500 md:mt-12 mt-8">
              <p className="mt-2">게임하면서 대화를 나누다보면</p>
              <p className="mt-2">어느새 사라진 영어공포증</p>
              <p className="mt-2">웃으면서 자연스럽게 나오는 영어 회화</p>
            </div>
          </div>
          <div className="md:block hidden">
            <Image src={BookIllustration} alt="BookIllustration" height={350} />
          </div>
        </div>
      </article>
      <article className="flex flex-col max-w-7xl mx-auto px-2">
        <div className="flex flex-col items-center text-center md:mt-24 mt-16">
          <h2 className="md:text-4xl text-2xl font-bold">
            수업은 이렇게 진행됩니다.
          </h2>
        </div>
        <div className="flex flex-col items-center text-center mt-12">
          <h3 className="md:text-2xl text-xl font-semibold">
            1. 아이가 좋아하는 게임과 수업을 진행할 시간을 선택하세요!
          </h3>
          <div className="flex justify-between items-center text-left mt-8">
            <div className="px-12 md:block hidden">
              <Image
                src={TimeIllustration}
                alt="TimeIllustration"
                height={350}
              />
            </div>
            <div>
              <div className="md:text-xl text-base">
                <p className="">아이와 함께 살펴보면서 이야기를 나누는 것도 </p>
                <p className="md:mt-4 mt-2">좋은 방법입니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-12">
          <h3 className="md:text-2xl text-xl font-semibold">
            2. 아이와 함께 수업을 진행해주실 선생님을 둘러보세요!
          </h3>
          <div className="flex justify-between items-center text-left mt-8">
            <div className="px-12">
              <div className="md:text-xl text-base">
                <p className="">선생님의 자기소개부터 살펴보아요.</p>
                <p className="md:mt-4 mt-2">
                  수업 스타일, 발음, 후기 등을 중점으로 보시면 더욱 좋아요!
                </p>
              </div>
            </div>
            <div className="px-12 md:block hidden">
              <Image src={AIllustration} alt="AIllustration" height={350} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-12">
          <h3 className="md:text-2xl text-xl font-semibold">
            3. 약속된 시간에 영어로 대화하며 선생님과 함께 게임해요!
          </h3>
          <div className="flex items-center text-left mt-8">
            <div className="px-12 md:block hidden">
              <Image
                src={TalkIllustration}
                alt="TalkIllustration"
                height={350}
              />
            </div>
            <div>
              <div className="md:text-xl text-base">
                <p className="">신나게 게임하면서 대화를 나누어요!</p>
                <p className="md:mt-4 mt-2">
                  겁내지 않고, 영어로 대화하면 선생님이 도와줄거에요.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-24">
          <h3 className="md:text-2xl text-xl font-semibold">
            4. 수업을 마치고 분석 레포트로 복습해요!
          </h3>
          <div className="flex items-center text-left mt-8">
            <div className="px-12">
              <div className="md:text-xl text-base">
                <p className="">게임을 하면서 어떤 표현을 배웠나요?</p>
                <p className="md:mt-4 mt-2">
                  반복적으로 실수하는 발음과 표현은 무엇이었나요?
                </p>
                <p className="md:mt-8 mt-4">
                  분석 레포트로 매일 설장하는 아이의 영어 실력을 확인하세요!
                </p>
              </div>
            </div>
            <div className="px-12 md:block hidden">
              <Image
                src={ChatIllustration}
                alt="ChatIllustration"
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-24 px-2">
          <h2 className="md:text-4xl text-2xl font-bold">
            어떤 게임으로 수업을 진행하나요?
          </h2>
          <p className="md:text-xl text-base mt-8">
            COWCOW에는 그 어떤 게임도 진행해주실 다양한 선생님들이 계십니다.
          </p>
          <div className="mt-12">
            <Image src={Game} alt="game" height={500} />
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-40">
          <h2 className="md:text-4xl text-2xl font-bold">
            &quot;아이가 정말 즐겁게 영어를 배우는게 느껴져요.&quot;
          </h2>
          <p className="md:text-xl text-base mt-8">
            영어로 말하면서 더 이상 겁먹거나 긴장하지 않는 아이의 모습이
            신기해요!
          </p>
          <div className="flex md:flex-row flex-col mt-16 gap-8 mx-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <h3 className="flex flex-col font-bold text-xl mb-2">
                  초등학교 3학년 아이 어머니 후기 <br />
                  (브롤스타즈 영어수업 수강)
                </h3>
                <div className="text-neutral-700 mt-2">
                  <p className="mt-8">
                    아이가 학습지나 영어 학원은 그렇게 싫어했는데, 이제는 영어
                    선생님이랑 게임하는 날만 기다리네요.
                  </p>

                  <p className="mt-8">
                    처음에 반신반의해서 게임하는 모습을 지켜보았는데, 아이가
                    생각보다 말도 많이하고, 선생님에게 질문도 하는 모습보고
                    놀랐어요...
                  </p>

                  <p className="mt-8">
                    무엇보다 영어로 말하는 것을 겁내지 않는 것 같아요.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">
                  초등학교 6학년 아이 어머니 후기 <br />
                  (마인 크래프트 영어수업 수강)
                </h3>
                <div className="flex flex-col text-neutral-700 mt-2 item-center">
                  <p className="mt-8">
                    아이가 게임(마인 크래프트)을 엄청 좋아해서 걱정했는데,
                    선생님과 영어로 대화하면서 블락코딩까지 알려주시더라구요. ^^
                  </p>

                  <p className="mt-8">
                    그래도 영어에 흥미를 붙일 수 있다는게 얼마나 다행인지..
                    앞으로도 잘 부탁드려요 해* 선생님~
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">
                  중학교 1학년 아이 어머니 후기 <br />
                  (배틀 그라운드 영어수업 수강)
                </h3>
                <div className="flex flex-col text-neutral-700 mt-2 item-center">
                  <p className="mt-8">
                    아들이 영어공부를 포기할까봐 마지막으로 시도한 게임 영어
                    수업이었는데, 너무 좋아하네요 ㅎㅎ
                  </p>

                  <p className="mt-8">
                    아들 말로는 미군이랑 함께있는 거 같다는데 솔직히 그정도는
                    아니겠지요..ㅋ 이렇게라도 흥미붙이고 회화만 잘해도 먹고
                    사는덴 문제 없겠죠?^^
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center max-w-7xl mx-auto mt-24 text-center">
          <div className="px-4 py-12">
            <h2 className="md:text-4xl text-2xl font-bold">
              오늘도 수많은 아이들이 즐겁게 영어공부를 하고 있습니다.
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-8 mt-16">
              <div className="flex flex-col items-center text-neutral-100 bg-blue-500 rounded px-8 py-8">
                <h3 className="text-2xl font-bold">4.9점</h3>
                <p className="mt-2">수업 만족도(5점 만점 기준)</p>
              </div>
              <div className="flex flex-col items-center text-neutral-100 bg-blue-500 rounded px-8 py-8">
                <h3 className="text-2xl font-bold">100% 환불 보장</h3>
                <p className="mt-2">1회 강의 후, 불만족시</p>
              </div>
              <div className="flex flex-col items-center text-neutral-100 bg-blue-500 rounded px-8 py-8">
                <h3 className="text-2xl font-bold">89%</h3>
                <p className="mt-2">강의 재구매율(2주이내)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-left items-center md:text-left text-center md:mt-40 mt-16 px-2">
          <h2 className="md:text-5xl text-2xl font-bold">
            <p>더 이상 고민하지 마세요.</p>
            <p className="mt-4">지금 한정 특가로 체험하고</p>
            <p className="mt-4">효과를 확인해보세요!</p>
          </h2>
          <div className="flex flex-row items-center md:mt-0 mt-12">
            <Link
              href="https://tally.so/r/nWEdEP"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded"
            >
              선착순 한정 9,900원
            </Link>
            <p className="text-sm mt-4 text-red-500">
              (해당 프로모션은 정해진 수량에 따라 선착순 마감될 수 있습니다.)
            </p>
          </div>
        </div>
      </article>
      <div className="bg-neutral-50 md:mt-40 mt-16">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="px-4 py-24">
            <h2 className="font-bold md:text-4xl text-2xl">
              <p>COWCOW 영어/일본어 선생님으로</p>
              <p className="mt-4">지원하고 싶어요!</p>
            </h2>
            <div className="text-teal-500 my-8 font-semibold md:text-xl text-base">
              <p className="mt-4">영어/일본어로 아이를 가르칠 수 있나요? </p>
              <p className="mt-4">게임을 좋아한다면 지금 지원해보세요!</p>
            </div>
            <Link
              href="https://tally.so/r/3NlEPp"
              target="_blank"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-8 rounded"
            >
              선생님으로 지원하기
            </Link>
          </div>
          <div className="px-12 md:block hidden">
            <Image src={ApplyIllustration} alt="지원하기" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;

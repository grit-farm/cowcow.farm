"use client";

const Footer = () => {
  return (
    <footer className="bg-white shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-2 mt-8">
        <span className="block text-xs text-gray-700 sm:text-center">
          영어를 가장 즐겁게 배우는 방법 COWCOW
        </span>
      </div>
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="flex gap-2 justify-center text-xs text-gray-700 sm:text-center mb-1">
          <div>그릿팜</div>
          <div>|</div>
          <div>대표: 이학성</div>
          <div>|</div>
          <div>인천광역시 부평구 주부토로 201</div>
          <div>|</div>
          <div>이메일: contact@cowcow.farm</div>
          <div>|</div>
          <div>사업자등록번호: 145-02-03376</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

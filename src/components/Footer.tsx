"use client";

const Footer = () => {
  return (
    <footer className="bg-white shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-xs text-gray-700 sm:text-center mb-1">
          게임으로 배우는 생활영어
        </span>
        <span className="block text-sm text-gray-700 sm:text-center ">
          © 2023{" "}
          <a href="/" className="hover:underline">
            COWCOW
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

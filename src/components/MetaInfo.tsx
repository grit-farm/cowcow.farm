"use client";

const MetaInfo = () => {
  return (
    <>
      <meta
        name="naver-site-verification"
        content={`${process.env.NEXT_PUBLIC_NAVER_SITE_ID}`}
      />
    </>
  );
};

export default MetaInfo;

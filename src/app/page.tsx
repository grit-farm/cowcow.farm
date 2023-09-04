import Custom500 from "./error/500";
import ClientPage from "./page.client";

const HomePage = () => {
  try {
    return <ClientPage />;
  } catch (e) {
    return <Custom500 />;
  }
};

export default HomePage;

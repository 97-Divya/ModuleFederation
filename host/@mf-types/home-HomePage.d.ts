declare module "home/HomePage" {
  import React from "react";

  interface HomePageProps {
    username: string | null;
    logout: () => void;
  }

  const HomePage: React.FC<HomePageProps>;
  export default HomePage;
}

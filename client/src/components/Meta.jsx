import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Proton Store",
  description: "We sell the great products for the best price ",
  keywords: "electronics, buy electronics, good deals, tech shop",
};

export default Meta;

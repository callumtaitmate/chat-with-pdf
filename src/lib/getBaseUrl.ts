const getBaseUrl = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://researchxcelerator.com`

export default getBaseUrl;

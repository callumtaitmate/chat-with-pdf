const getBaseUrl = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://getdocument.info`

export default getBaseUrl;

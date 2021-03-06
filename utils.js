export const md = window.markdownit();

export const fetchJSON = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const href = (text) =>
  text
    .split(" ")
    .map((d) => d.toLowerCase())
    .join("-");

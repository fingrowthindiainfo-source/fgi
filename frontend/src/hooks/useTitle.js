import { useEffect } from "react";

const setMeta = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", value);
};

const useTitle = (title, description) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      setMeta("meta[name='description']", description);
      setMeta("meta[property='og:title']", title);
      setMeta("meta[property='og:description']", description);
      setMeta("meta[name='twitter:title']", title);
      setMeta("meta[name='twitter:description']", description);
    }
  }, [title, description]);
};

export default useTitle;

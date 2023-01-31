import { useCallback, useEffect, useState } from "react";
import { fetchImageUrl } from "../../helpers";

const placeholder = "https://via.placeholder.com/100";

export default function Img() {
  const [src, setSrc] = useState("");
  const [error, setError] = useState(false);

  const fetchSrc = useCallback(async () => {
    const response = await fetchImageUrl(2000);
    if (response.error) {
      setError(true);
      return;
    }
    setSrc(response.data);
  }, []);

  useEffect(() => {
    if (!src) {
      fetchSrc();
    }
  }, []);

  return (
    <img
      className="the-way-of-water"
      alt="profile-image"
      src={src || placeholder}
    />
  );
}

import { useEffect, useState } from "react";

interface DataInterface {
  country: string;
  countryCode: string;
  query: string;
  city: string;
  isp: string;
  regionName: string;
  zip: string;
  proxy: boolean;
}

export function useLocate() {
  const [data, setData] = useState<DataInterface | null>(null);
  const [loading, setLoading] = useState(true);

  //http://ip-api.com/json
  ///api/ip-api

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((res) => {
        return res.json();
      })
      .then((d: DataInterface) => {
        setData(d);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data from API: ", err);
        setLoading(false);
      });
  }, []);

  return { data, loading };
}

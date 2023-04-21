import React, { useState } from "react";

const VerificationPage = () => {
  const [response, setResponse] = useState({});
  const [pending, setPending] = useState(true);
  const [queryParams] = useSearchParams();
  useEffect(() => {
    const obj = {
      emailValidatioCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    (async () => {
      const result = await emailVarification(obj);
      result.status === "success" && setResponse(result);
      setPending(false);
    })();
  }, []);
  return <div>VerificationPage</div>;
};

export default VerificationPage;

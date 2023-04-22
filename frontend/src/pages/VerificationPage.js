import React, { useState } from "react";
import { verifyEmail } from "../Helpers/axiosHelper";

const VerificationPage = () => {
  const [queryParams] = useSearchParams();
  const [pending, setPending] = useState(true);
  const [response, setResponse] = useState({});
  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    (async () => {
      const result = await verifyEmail(obj);
      setResponse(result);
      setPending(false);
    })();
  }, []);
  return (
    <div>
      <Container>
        {pending} && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Email verification on process</p>)
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      </Container>
    </div>
  );
};

export default VerificationPage;

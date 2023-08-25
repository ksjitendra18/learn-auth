import { useEffect, useState } from "react";
import { auth } from "../libs/firebase";

import { sendEmailVerification } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [isCheckingStatus, setIsCheckingStatus] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [sentMail, setSentMail] = useState(false);

  const navigate = useNavigate();

  const sendVerificationEmail = async () => {
    try {
      auth.authStateReady().then(() => {
        if (!auth.currentUser || auth.currentUser === null) {
          return navigate("/login");
        }

        if (auth.currentUser?.emailVerified) {
          setIsVerified(true);
          return navigate("/dashboard");
        } else {
          sendEmailVerification(auth.currentUser!).then(() => {
            setSentMail(true);
          });
        }
      });
    } catch (error) {
      throw new Error("Error while sending email");
    } finally {
      setIsCheckingStatus(false);
    }
  };

  useEffect(() => {
    sendVerificationEmail();
  }, []);

  return (
    <div className="md:w-1/2 mx-auto mt-32 py-10 rounded-md px-3 flex items-center justify-center bg-slate-100 shadow-md">
      {isCheckingStatus ? (
        <div>Checking Auth Status...</div>
      ) : (
        <>
          {isVerified ? (
            <>
              <p className="text-center">
                You have already verified your email. Redirecting you to
                dashboard
              </p>
            </>
          ) : (
            <>
              {sentMail ? (
                <div className="flex flex-col gap-3 items-center justify-center">
                  <p>Sent Verification mail successfully.</p>
                  <p>
                    Please check your spam folder if you can't find it in inbox.
                  </p>

                  <Link
                    to="/login"
                    className="rounded-md bg-blue-600 text-white px-5 py-2"
                  >
                    Log in
                  </Link>
                </div>
              ) : (
                <>
                  <div className="text-center flex flex-col gap-3 items-center justify-center">
                    Sending Email in progress...
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default VerifyEmail;

import CookieConsent, { Cookies } from "react-cookie-consent";
import Link from "next/link";

const CookiesWrapper = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Close"
            cookieName="fintechAgree"
            style={{ background: "#625093" }}
            buttonStyle={{ color: "#625093", fontSize: "13px", backgroundColor: '#fff' }}
            expires={150}
        >
            <p className="cookies-text">
                Our website may use cookies to distinguish you from other users of our website. <br />
                Read more about our <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
        </CookieConsent>
    );
};

export default CookiesWrapper;
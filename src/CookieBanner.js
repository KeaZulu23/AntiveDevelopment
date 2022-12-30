import CookieConsent, { Cookies } from "react-cookie-consent";

const CookieBanner = () => {
    
  
    return (
        <CookieConsent
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Accept was triggered by user scrolling");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}
        debug={true}
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ backgroundColor: "black" }}
        buttonStyle={{ color: "white", fontSize: "13px", backgroundColor: "blue" }}
        expires={1}
        enableDeclineButton flipButtons
      >
        <p style={{fontSize: "11px"}}>
        The new Protection of Personal Information (POPI) Act Regulations are effective from 1 July 2021. This means we need your consent to receive our direct marketing material. No spam, we promise!<br /><br />
        When you opt in, you’ll receive our newsletters, latest articles, product and service promotional material and be the first to know about awesome competitions. <br /><br />
        You can learn more about how your personal information is processed by reading our <u><a href='/termsconditions'>Privacy Policy</a></u> and managing your privacy settings. <br />
        </p>
      </CookieConsent>
    );
  };
  
  export default CookieBanner;
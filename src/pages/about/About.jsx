import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col--12">
          <h2>About this site</h2>
        </div>
        <div className="col col--12 color">
          <p className="text">
          A well organised Blood Transfusion Service (BTS) is a vital component of any health care delivery system.
          <br/>
          <br/>

          The Blood Transfusion Service in the country is highly decentralised and lacks many vital resources like manpower, adequate infrastructure and financial base. The main issue, which plagues blood banking system in the country, is fragmented management. In spite of hospital based system, many large hospitals and nursing homes do not have their own blood banks and this has led to proliferation of stand-alone private blood banks.

           For effective clinical use of blood, lack of donners have posed a challenge to the organisation and management of blood transfusion service.
                     
          </p>
          <p className="text">Through this small scale project , patients will able to  find blood in case of an Emergency by viewing detials of registered users. Also, who wish to donate blood can register himself.

          Anyone between 18 to 65 years of age and in normal health having a body weight of 45 kg or more and a haemoglobin content no less than 12.5 gms/hundred ml can be a donor and can register.</p>
        </div>
      </div>
    </div>
  );
}

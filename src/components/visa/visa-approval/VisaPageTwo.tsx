import Link from "next/link";

type Props = {
  visaData: any;
};

export default function VisaPageTwo({ visaData }: Props) {
  return (
    <div
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "#fff",
        padding: "50px 40px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#000",
        boxSizing: "border-box",
        fontSize: "16px",
        lineHeight: "1.25",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "18px",
          marginBottom: "20px",
        }}
      >
        You do not require a visa label in your passport
      </div>

      <p>
        The details above reflect the electronic record of your visa held by
        Immigration New Zealand (INZ). Do not alter this letter. For
        information about visas go to
      </p>

      <a href="#">https://immigration.govt.nz.info</a>

      <p style={{ marginTop: "20px" }}>
        Please check that your visa details match your passport before you
        travel and contact us immediately if there are any errors.
      </p>

      <p>
        If you get a new passport while this visa is still valid, you must
        request INZ to update your visa details so that they match your new
        passport. INZ's website has information on how to do this:
      </p>

      <a href="#">immigration.govt.nz/transfervisa</a>

      <p style={{ marginTop: "20px" }}>
        You can verify the details of your visa online using the Visa
        Verification Service. With your consent, other people or organisations
        such as employers or health care providers can verify the details of
        your visa using the Visa Verification Service. See:
      </p>

      <a href="#">https://immigration.govt.nz.info</a>

      {/* COVID */}
      <div
        style={{
          marginTop: "22px",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "16px",
          }}
        >
          New Zealand's COVID-19 requirements
        </div>

        <p>
          If you plan to travel to or from New Zealand, please check the
          current COVID-19 requirements. These requirements can change so we
          recommend referring to these often when planning travel.
        </p>

        <a href="#">
          https://covid19.govt.nz/internationaltravel/
        </a>
      </div>

      {/* Automated Systems */}

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "16px",
          }}
        >
          Automated systems
        </div>

        <p>
          Some aspects of your application have been processed using automated
          systems in accordance with section 28 of the Immigration Act 2009.
          For more information about INZ's use of automated systems go to
        </p>

        <a href="#">
          www.immigration.govt.nz/about-us/site-information/terms-of-use
        </a>
      </div>

      {/* Visa Expiry */}

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: "16px",
          }}
        >
          You must not remain in New Zealand after your visa expires
        </div>

        <p>
          You must hold a valid visa at all times while you are in New Zealand.
          If you do not hold a valid visa, you will be in New Zealand unlawfully
          and you will be liable for deportation.
        </p>

        <p>
          If you do not leave voluntarily before you are served with a
          deportation order you will face a prohibition period preventing your
          return to New Zealand in the future.
        </p>
      </div>

      {/* Questions */}

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <p>If you have any questions, you can:</p>

        <ul
          style={{
            marginTop: "10px",
            paddingLeft: "35px",
            listStyleType: "disc"
          }}
        >
          <li>
            call our Immigration Contact Centre on 0508 55 88 55 or
            09 914 4100, or for those outside of
New Zealand +64 9 914 4100, or
          </li>

          <li style={{ marginTop: "12px" }}>
            find answers to frequently asked questions at:
            <br />
            <Link href="https://www.immigration.govt.nz/knowledgebase/kb-question"
  style={{
    color: "#0066cc",
    textDecoration: "underline",
  }}>
              www.immigration.govt.nz/knowledgebase/kb-question
            </Link>
          </li>
        </ul>
      </div>

      {/* Signature */}

      <div
        style={{
          marginTop: "20px",
        }}
      >
        

        <div>
          Ngā mihi
          <br />
          Liz Collins
          <br />
          Immigration
          <br />
          Officer
          <br />
          Immigration New
          <br />
          Zealand
        </div>
      </div>

      {/* Travel Warning */}

      <div
        style={{
          marginTop: "55px",
          fontWeight: 700,
          fontSize: "16px",
        }}
      >
        PRINT THIS DOCUMENT AND CARRY IT WITH YOUR PASSPORT WHEN TRAVELLING
      </div>

      {/* Footer */}

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: 0.5,
          fontSize: "12px",
        }}
      >
        <span>
          MINISTRY OF BUSINESS,
          <br />
          INNOVATION & EMPLOYMENT
        </span>

        <span>New Zealand Government</span>
      </div>
    </div>
  );
}
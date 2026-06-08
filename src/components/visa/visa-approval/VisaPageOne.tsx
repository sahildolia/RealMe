import Image from "next/image";

type Props = {
  visaData: any;
};

export default function VisaPageOne({ visaData }: Props) {
  return (
    <div
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "#fff",
        padding: "70px 80px",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#000",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "8px",
        }}
      >
        <div>
          <div style={{ fontSize: "14px", marginBottom: "2px" }}>
            <strong>Application number:</strong> WV91175112
          </div>

          <div style={{ fontSize: "14px", marginBottom: "2px" }}>
            <strong>Client number:</strong> 80178584
          </div>

          <div style={{ fontSize: "14px" }}>
            25 April 2026
          </div>
        </div>

        <Image
          src="/nz-logo.png"
          alt="NZ Immigration"
          width={130}
          height={130}
        />
      </div>

      {/* Greeting */}
      <div
        style={{
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        Kia ora {visaData?.familyName}
      </div>

      {/* Approval Section */}
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          New Zealand work visa approval
        </div>

        <div
          style={{
            fontSize: "16px",
            lineHeight: "1.45",
          }}
        >
          Application number WV91175112 for a New Zealand Work Visa -
          Accredited Employer Work Visa has been approved. If this
          application has been made through an immigration adviser,
          lawyer or other representative who is exempt from licensing,
          this entire document must be provided to the applicant.
        </div>
      </div>

      {/* Work Visa Details */}
      <div
        style={{
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "18px",
          }}
        >
          Work Visa details
        </div>

        <div
          style={{
            fontSize: "16px",
            fontWeight: 700,
            marginBottom: "18px",
          }}
        >
          Applicant details
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "80px",
            rowGap: "14px",
            fontSize: "16px",
          }}
        >
          <div>
            Name: {visaData?.familyName}
          </div>

          <div>
            Date of birth: {visaData?.dob}
          </div>

          <div>
            Gender: {visaData?.gender}
          </div>

          <div>
            Passport number: {visaData?.passportNumber}
          </div>

          <div>
            Nationality: {visaData?.nationality}
          </div>

          <div>
            Client number: 80178584
          </div>
        </div>
      </div>
      {/* Visa Conditions */}

<div
  style={{
    marginTop: "45px",
  }}
>
  <div
    style={{
      fontSize: "18px",
      fontWeight: 700,
      marginBottom: "20px",
    }}
  >
    Visa conditions
  </div>

  <div
    style={{
      fontSize: "16px",
      lineHeight: "1.35",
    }}
  >
    <div>The start date of this visa is 25 April 2026.</div>

    <div>
      This visa allows multiple entry - you can enter New Zealand
      multiple times using this visa.
    </div>

    <div>
      You must arrive in New Zealand before 24 April 2029.
    </div>

    <div>
      The last date you may re-enter New Zealand is 36 months
      after the date of your first arrival in New Zealand.
    </div>

    <div>
      This visa expires 36 month(s) after the date of your first
      arrival in New Zealand.
    </div>

    <div>
      Financial support evidence not required.
    </div>

    <div>
      Return/onward ticket not required.
    </div>

    <div>
      Stay subject to grant of entry permission.
    </div>

    <div>
      The holder may only work as a Fruit Picking & Packing in
      Dannevirke for Kiwi Farming Enterprises Limited.
    </div>

    <div>
      Must be paid at or above $19.00 per hour.
    </div>

    <div>
      Must provide evidence of remuneration if requested.
    </div>

    <div>
      You must leave before visa expiry or face deportation.
    </div>

    <div>
      The holder of this visa must comply with any order made
      under section 11 of the COVID-19 Public Health Response
      Act 2020.
    </div>

    <div>
      The holder of this visa must comply with any order made
      under section 70 of the Health Act 1956 and listed in
      schedule 2 of the COVID-19 Public Health Response Act 2020.
    </div>

    <div>
      The holder of this visa must comply with any instruction
      from a Medical Officer of Health which relates to a
      notifiable or quarantinable disease.
    </div>

    <div>
      May not be placed in a triangular employment arrangement
      with a controlling third party.
    </div>
  </div>

  <div
    style={{
      marginTop: "25px",
      fontSize: "16px",
      fontWeight: 700,
    }}
  >
    If you do not comply with these conditions,
    you may become liable for deportation
  </div>
</div>
    </div>
  );
}
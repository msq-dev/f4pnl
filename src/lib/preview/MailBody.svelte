<script>
  import {
    introHead,
    introText,
    topImgUrl,
    topImgAlt,
    topHead,
    topTeaser,
    topMediaType,
    topMediaUrl,
    mainContent,
  } from "../../stores/content"
  import MailParagraph from "./MailParagraph.svelte"
  import MailRow from "./MailRow.svelte"

  const legalLines = [
    "Pro-Press Verlagsgesellschaft mbH",
    "HRB 3815, AG Bonn",
    "Geschäftsführung: Dr. Fabian Rusch",
    "Friedrich-Ebert-Allee 57, 53113 Bonn",
  ]

  const colorBtnUnsubscribe = "#1986E6"

  $: introParagraphs = $introText.split("\n")
</script>

<table width="700" cellspacing="0" cellpadding="0" border="0" align="center">
  <tr>
    <td bgcolor="#ffffff">
      <p align="center">
        <img
          alt="Future4Public-Logo"
          src="https://f4p.online/wp-content/uploads/2023/12/logo_f4p.jpg"
          style="
          display: block;
          height: auto;
          border: 0px none;
          width: 600px;
          max-width: 100%;
        "
          width="600"
          height="auto"
          border="0"
        />
      </p>
      <p>&nbsp;</p>

      <table width="100%" cellspacing="0" cellpadding="30" border="0">
        <tr>
          <td width="100%" valign="top">
            <MailParagraph
              fontSize={24}
              fontWeight={700}
              color={"accent"}
              text={$introHead}
            />

            {#each introParagraphs as p}
              <MailParagraph text={p} />
            {/each}
          </td>
        </tr>
      </table>

      <!--<MailBlockIntro>-->
      <p>&nbsp;</p>
      <p align="center">
        <img
          alt={$topImgAlt}
          src={$topImgUrl}
          style="
          display: block;
          height: auto;
          border: 0px none;
          width: 600px;
          max-width: 100%;
        "
          width="600"
          height="auto"
          border="0"
        />
      </p>

      <!--<MailBlockTopContent>-->
      <table width="100%" cellspacing="0" cellpadding="30" border="0">
        <tr>
          <td width="60%" valign="top">
            <MailParagraph
              noMargin={true}
              fontSize={18}
              fontWeight={700}
              fontFamily={"serif"}
              text={$topHead}
            />
            <MailParagraph text={$topTeaser} />
          </td>
          <td width="40%" valign="top">
            <p align="center">
              <a href={$topMediaUrl} target="_blank"
                ><img
                  alt="Listen on spotify"
                  class="big"
                  src="https://f4p.online/wp-content/uploads/2023/12/spoti_btn.png"
                  style="
                  display: block;
                  width: 150px;
                  height: auto;
                  border: 0px none;
                  max-width: 150px;
                "
                  width="150"
                  height="auto"
                /></a
              >
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  {#each $mainContent as row}
    <MailRow {row} />
  {/each}

  <!--<MailBlockCoop>-->
  <table width="700" cellspacing="0" cellpadding="30" border="0" align="center">
    <tr>
      <td bgcolor="#ffffff">
        <p>
          <span
            style="
              font-size: 20pt;
              font-weight: 700;
              font-style: italic;
              color: #9a9a9a;
            "
            ><span
              style="
                font-family: 'Segoe UI', 'Arial', sans-serif;
                color: #9a9a9a;
              ">in Kooperation mit</span
            ></span
          >
        </p>
        <p align="center">
          <img
            alt="Logos Kooperationspartner"
            src="https://f4p.online/wp-content/uploads/2023/12/f4p_coop.jpg"
            style="
              display: block;
              height: auto;
              border: 0px none;
              width: 700px;
              max-width: 100%;
            "
            width="700"
            height="auto"
            border="0"
          />
        </p>
        <p>&nbsp;</p>
      </td>
    </tr>
  </table>

  <!--<MailBlockSocial>-->
  <table width="700" cellspacing="0" cellpadding="30" border="0" align="center">
    <tr>
      <td bgcolor="#ffffff">
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td width="25%" valign="top">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width: 24px" valign="middle" align="left">
                    <img
                      src="https://f4p.online/wp-content/uploads/2023/12/logo_ig.png"
                      alt="Instagram"
                      style="
                        width: 18px;
                        height: 18px;
                        vertical-align: middle;
                      "
                      width="18"
                      height="18"
                    />
                  </td>
                  <td
                    style="
                      color: #2d2d2d !important;
                      font-size: 12px;
                      font-family: 'Segoe UI', sans-serif;
                      font-weight: 400;
                      text-align: left;
                      direction: ltr;
                      letter-spacing: 0px;
                    "
                    valign="middle"
                  >
                    <a
                      href="https://www.instagram.com/future4public/"
                      target="_blank"
                      style="
                        color: #2d2d2d !important;
                        font-size: 12px;
                        font-family: 'Segoe UI', sans-serif;
                        font-weight: 400;
                        text-align: left;
                        direction: ltr;
                        letter-spacing: 0px;
                        text-decoration: none !important;
                      ">future4public</a
                    >
                  </td>
                </tr>
              </table>
            </td>
            <td width="25%" valign="top">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width: 24px" valign="middle" align="left">
                    <img
                      src="https://f4p.online/wp-content/uploads/2023/12/logo_spoti.png"
                      alt="Spotify"
                      style="
                        width: 18px;
                        height: 18px;
                        vertical-align: middle;
                      "
                      width="18"
                      height="18"
                    />
                  </td>
                  <td
                    style="
                      color: #2d2d2d !important;
                      font-size: 12px;
                      font-family: 'Segoe UI', sans-serif;
                      font-weight: 400;
                      text-align: left;
                      direction: ltr;
                      letter-spacing: 0px;
                    "
                    valign="middle"
                  >
                    <a
                      href="https://open.spotify.com/show/0zBOffI3Q3b68dhA5PNrQR"
                      target="_blank"
                      style="
                        color: #2d2d2d !important;
                        font-size: 12px;
                        font-family: 'Segoe UI', sans-serif;
                        font-weight: 400;
                        text-align: left;
                        direction: ltr;
                        letter-spacing: 0px;
                        text-decoration: none !important;
                      ">Future4Public</a
                    >
                  </td>
                </tr>
              </table>
            </td>
            <td width="25%" valign="top">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width: 24px" valign="middle" align="left">
                    <img
                      src="https://f4p.online/wp-content/uploads/2023/12/logo_x_twitter.png"
                      alt="Twitter"
                      style="
                        width: 18px;
                        height: 18px;
                        vertical-align: middle;
                      "
                      width="18"
                      height="18"
                    />
                  </td>
                  <td
                    style="
                      color: #2d2d2d !important;
                      font-size: 12px;
                      font-family: 'Segoe UI', sans-serif;
                      font-weight: 400;
                      text-align: left;
                      direction: ltr;
                      letter-spacing: 0px;
                    "
                    valign="middle"
                  >
                    <a
                      href="https://twitter.com/Future4Public"
                      target="_blank"
                      style="
                        color: #2d2d2d !important;
                        font-size: 12px;
                        font-family: 'Segoe UI', sans-serif;
                        font-weight: 400;
                        text-align: left;
                        direction: ltr;
                        letter-spacing: 0px;
                        text-decoration: none !important;
                      ">Future4Public</a
                    >
                  </td>
                </tr>
              </table>
            </td>
            <td width="50%" valign="top">
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="width: 24px" valign="middle" align="left">
                    <img
                      src="https://f4p.online/wp-content/uploads/2023/12/logo_youtube.png"
                      alt="Youtube"
                      style="
                        width: 18px;
                        height: 18px;
                        vertical-align: middle;
                      "
                      width="18"
                      height="18"
                    />
                  </td>
                  <td
                    style="
                      color: #2d2d2d !important;
                      font-size: 12px;
                      font-family: 'Segoe UI', sans-serif;
                      font-weight: 400;
                      text-align: left;
                      direction: ltr;
                      letter-spacing: 0px;
                    "
                    valign="middle"
                  >
                    <a
                      href="https://www.youtube.com/@BehoerdenSpiegel"
                      target="_blank"
                      style="
                        color: #2d2d2d !important;
                        font-size: 12px;
                        font-family: 'Segoe UI', sans-serif;
                        font-weight: 400;
                        text-align: left;
                        direction: ltr;
                        letter-spacing: 0px;
                        text-decoration: none !important;
                      ">BehoerdenSpiegel</a
                    >
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!--<MailBlockLegal>-->
  <table width="700" cellspacing="0" cellpadding="30" border="0" align="center">
    <tr>
      <td bgcolor="#ffffff">
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td width="50%" valign="top">
              <p>&nbsp;</p>
              <p style="font-size: 8pt">
                <span style="font-family: 'Segoe UI', 'Arial', sans-serif"
                  ><strong>Impressum</strong><br />
                  {#each legalLines as l}
                    {l}<br />
                  {/each}
                  <a
                    href="https://f4p.online/impressum/"
                    target="_blank"
                    style="color: #2d2d2d">f4p.online</a
                  ></span
                >
              </p>
            </td>
            <td width="50%" valign="top">
              <p>&nbsp;</p>
              <p style="font-size: 8pt">
                <span style="font-family: 'Segoe UI', 'Arial', sans-serif"
                  ><strong>Datenschutz</strong><br />Das Thema Datenschutz ist
                  für uns eine wichtige Angelegenheit! Weitere Informationen
                  dazu findest du in der
                  <a
                    href="https://f4p.online/impressum/"
                    target="_blank"
                    style="color: #2d2d2d">Datenschutzerklärung</a
                  >.</span
                >
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <tr>
    <td bgcolor="#ffffff">
      <p>&nbsp;</p>
      <p align="center">
        <span
          style="font-size: 10pt; color: #ffffff; background-color: {colorBtnUnsubscribe};"
          ><span
            style="
              font-family: 'Segoe UI', 'Arial', sans-serif;
              color: #ffffff;
              background-color: {colorBtnUnsubscribe};
              border: 4pt solid {colorBtnUnsubscribe};
            "
            ><a
              href="https://f4p.online/abbestellung?kdnr=[u_CustomerNo]&amp;mail=[u_EMail]"
              style="
                color: #ffffff !important;
                text-decoration: none !important;
                font-size: 10pt;
                font-weight: 700;
              ">&nbsp;Newsletter-Abo beenden&nbsp;</a
            ></span
          ></span
        >
      </p>
      <p>&nbsp;</p>
    </td>
  </tr>
</table>

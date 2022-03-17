import React from "react";
import styled from "@emotion/styled";
import { Box, Paper, Typography, Stack, Avatar } from "@mui/material";

const PrivacypolicyWrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  .title {
    font-size: 24px;
    font-weight: 500;
    margin: 0 10px 0 0;
    color: black;
    &:hover {
      cursor: pointer;
      color: #37b9eb;
      transition: 0.5s;
    }
  }
  @media (max-width: 767px) {
    .title {
      text-overflow: ellipsis;
      width: 100%;
    }
  }
`;
const LinkWrapper = styled.a`
  color: black;
  &:hover {
    opacity: 100%;
    transition: color 0.5s ease;
    color: #16b9b3;
  }
`;

const LineWrapper = styled(Typography)`
  margin: 5px 0;
`;

const PaperWrapper = styled(Paper)`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 767px) {
    padding: 10px;
  }
`;

const CONTENT = [
  {
    id: 0,
    title: "使用者條款",
    content:
      "感謝您有意願貢獻資料及相關內容（以下統稱「內容」）至島島阿學學習社群（https://www.daoedu.tw，以下簡稱「本網站」）。此使用者條款存在於您及本網站管理機關島島阿學學習社群（「管理者」）間，目的在釐清雙方相關智慧財產權利狀態及其他權利義務關係。請閱讀以下條款及條件並確認，當您上傳內容至本網站時，即表示您接受本協議內容。",
  },
  {
    id: 1,
    title: "貢獻內容之合法及適當狀態",
    content:
      "您的資料貢獻不應侵害他人之智慧財產權利。如您貢獻內容，代表就您所知您表示，您有權授權管理者及本網站的使用者，依管理者指定、揀選的授權條款，來使用並散布這些內容。請注意管理者並不必然需要將您貢獻的內容包括於本網站上，並且得以在任何時候，將您的貢獻於本網站移除。對您貢獻的內容，管理者並無負擔保管責任。",
  },
  {
    id: 2,
    title: "授與權利",
    content:
      "您在此授與管理者全球性、免授權金、非專屬、永久、不可撤回之著作權及其他司法管轄區域可能定義之鄰接權及資料庫權之權利，讓其能夠不受前述權利限制使用內容之任何內含物，無論是就原始載體，或採其他型態進行利用。所授與的權利明示包括商業性使用，並且不排除任何領域內的利用。此一授權包括並不限於，將作品進行後續再授權利用，並允許多階的被授權人皆得採再授權方式再作利用。就現行法及著作權契約可容許的最大範圍內，您對管理者或經其授權利用內容之人，亦拋棄或不主張任何著作人格權。除本處訂明之範圍，您所貢獻內容之所有權利、地位，及利益，仍保留在您。",
  },
  {
    id: 3,
    title: "免責聲明",
    content:
      "在現行法容許的範圍內，您是以現狀及現有之基礎提供本內容，但應保證該內容無侵權之虞。除依法不得事先排除或限縮之責任外，您或管理者皆不應依此協議，為其他歸責理論導致任何損害賠償。",
  },
  {
    id: 4,
    title: "其他事項",
    content:
      "您所提送之表單及因之所需之註冊、登入程序裡，產生或由您填註的個人資訊，您在此同意管理者後續蒐集、處理及利用該個人資料。本「條款」依據中華民國法律。當本協議任一條款被視為無效時不影響其他部份之有效性。",
  },
  {
    id: 5,
    title: "輔助條款",
    content:
      "除採前述貢獻提供內容外，您亦可透過表格、附錄，補充「描述」欄位說明的方式，表達您指定特一款或多款公眾授權條款，或宣告模式為輔助授權條款之意向。此時該等貢獻內容，除依本條款第2條規定之方式授權本網站外，同時亦依指定條款雙重／多重授權予本網站。您所指定的輔助條款，並不拘束管理者，但在處理方式容許的前提下，管理者得尊重您的指定，除依管理者指定、揀選的授權條款外，同時一併採用輔助條款來散布該等貢獻內容。倘您於輔助條款裡列入「CC0 公眾領域貢獻宣告」，該宣告模式為著作權及相關權利的拋棄聲明，解釋上本網站得不受任何著作權利與相關權利之限制，自由使用該等貢獻內容，並亦得再採 CC0 宣告模式散布該等貢獻內容。",
  },
  {
    id: 6,
    title: "聯絡方式",
    content:
      "如果您對於本使用者條款、著作權、資料庫處理爭議、服務內容或隱私等有任何疑慮，請寄信至島島阿學學習社群之聯絡信箱 contact@daoedu.tw，由島島阿學學習社群核心團隊在固定會議中或透過其他管道為您處理。紛爭解決和管轄法院。依本使用者條款所產生之爭議，雙方合意以臺灣臺北地方法院為第一審管轄法院。",
  },
  {
    id: 7,
    title: "隱私權政策",
    content:
      "我們是誰，我們是島島阿學學習社群，網站網址為 https://www.daoedu.tw。這個網站收集了哪些個人資訊，以及為什麼要收集這些資訊。包含留言，使用者在這個網站發佈留言後，我們會收集顯示於留言表單中的資料、使用者的來源 IP 位址及瀏覽器的使用者代理程式字串，以協助網站偵測垃圾留言。這個網站會根據使用者的電子郵件地址建立匿名化字串 (亦稱為雜湊值)，並提供給 Gravatar 個人頭像服務以查詢這個使用者是否為這項服務的使用者。如需瞭解 Gravatar 個人頭像服務的隱私權政策，請造訪 https://automattic.com/privacy/。網站管理員核准使用者發佈的留言後，使用者的個人資料圖片便會在留言內容中公開顯示。以及媒體，如需將圖片上傳至這個網站，請避免上傳內嵌 EXIF GPS 位置資料的圖片，因為其他使用者可以從網站上下載圖片並擷取當中的位置資料。",
  },
  {
    id: 8,
    title: "聯絡表單",
    content:
      "使用者在這個網站發佈留言時，可以選擇是否在 Cookie 中儲存使用者姓名、電子郵件地址及網站網址；儲存這些資料是為了使用者更加方便，以便讓使用者發佈其他留言時，無需再次填寫個人資料。在使用者不自行清除裝置 Cookie 的狀況下，這些 Cookie 在個人裝置上保留一年。如果使用者造訪這個網站的登入頁面，系統會設定一個臨時 Cookie 以確定使用者的瀏覽器是否接受 Cookie；這個 Cookie 不包含任何個人資料，並會在使用者關閉瀏覽器時捨棄。使用者登入網站後，系統會設定幾個 Cookie 以儲存使用者的登入資訊及顯示項目設定；登入資訊 Cookie 會保留兩天，顯示項目設定 Cookie 則會保留一年。如果登入時核取了 [保持登入] 這項設定，使用者的登入狀態會維持兩週；帳號登出後，便會移除使用者裝置上的登入資訊 Cookie。使用者編輯或發佈文章時，會在瀏覽器中儲存其他 Cookie。這個 Cookie 不包含任何個人資料，僅記錄表示使用者撰寫的文章的文章 ID，並會在一天後過期。",
  },
  {
    id: 9,
    title: "來自第三方網站的嵌入內容",
    content:
      "這個網站上的文章可能會嵌入視訊、圖片、文章等內容，而來自第三方網站的嵌入內容，其隱私權處理方式與使用者造訪這些網站時的規定完全相同。無論使用者是否有這些第三方網站的帳號或是否登入網站，他們都會以各種方式收集與使用者相關的資料，如 Cookie、嵌入第三方追蹤程式碼、監視使用者與嵌入內容的互動等。",
  },
  {
    id: 10,
    title: "使用者資料分析",
    content:
      "這個網站的個人資料分享對象，如果你提出密碼重設要求，你目前進行連線的 IP 位址會顯示於密碼重設電子郵件中。",
  },
  {
    id: 11,
    title: "這個網站的個人資料保留期限",
    content:
      "當使用者在這個網站發佈留言後，該則留言及其中繼資料將會無限期保留。這樣系統便可以自動辨識及核准任何後續留言，而不須將其保留在待審核的佇列中。針對在這個網站上註冊的使用者，這個網站還會儲存他們在使用者 [個人資料] 頁面中提供的個人資訊。全部使用者都可以隨時查看、編輯或刪除自己的個人資訊 (無法變更的使用者名稱除外)。請注意，網站管理員也可以查看及編輯這些個人資訊。",
  },
  {
    id: 12,
    title: "使用者對個人資料擁有哪些權利",
    content:
      "如果使用者在這個網站擁有帳戶或曾發佈留言，便可以要求下載使用者在這個網站上的個人資料的資料匯出檔，這個檔案包含使用者提供給這個網站的全部個人資料。使用者也可以要求清除曾提供給這個網站的全部個人資料，但這項要求不包含站方為了管理、法律或安全目的而必須保留的相關資料。",
  },
];

const Privacypolicy = () => {
  return (
    <PrivacypolicyWrapper>
      <PaperWrapper>
        <Typography
          variant="h1"
          sx={{
            margin: "10px 0",
          }}
        >
          使用者條款與隱私權政策
        </Typography>
        <Box
          sx={{
            margin: "20px 0",
          }}
        >
          {CONTENT.map(({ id, title, content }) => (
            <Box key={id}>
              <Typography
                variant="h2"
                sx={{
                  margin: "40px 0 10px 0",
                }}
              >
                {title}
              </Typography>
              <Stack
                sx={{
                  margin: "20px",
                }}
              >
                <LineWrapper variant="p">{content}</LineWrapper>
              </Stack>
            </Box>
          ))}
        </Box>
      </PaperWrapper>
    </PrivacypolicyWrapper>
  );
};

export default Privacypolicy;

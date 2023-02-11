import { useCallback, useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { InputSentence } from "./InputSentence";
import axios from "axios";
import { GoogleTrans } from "./GoogleTrans";
import { DeepL } from "./DeepL";
import { GptTrans } from "./GptTrans";
import { Footer } from "./Footer";

function App() {
  const [japSent, setJapSent] = useState("");
  const [enSent, setEnSent] = useState("");
  const [enDeeplSent, setEnDeeplSent] = useState("");
  const [enGptSent, setEnGptSent] = useState("");
  const [enSentActive, setEnSentActive] = useState(false);
  const [enDeeplSentActive, setEnDeeplSentActive] = useState(false);
  const [enGptSentActive, setEnGptSentActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClickTransrate = useCallback((event: any) => {
    setJapSent(event.target.value);
  }, []);

  const onClickFetchData = () => {
    setLoading(true);
    axios
      .get(
        `https://script.google.com/macros/s/${
          import.meta.env.VITE_GAS_AUTH_KEY
        }/exec?text=${japSent}&source=ja&target=en`
      )
      .then((res) => {
        setEnSent(res.data.text);
        setEnSentActive(true);
      });

    axios
      .get(
        `https://api-free.deepl.com/v2/translate?auth_key=${
          import.meta.env.VITE_DEEPL_AUTH_KEY
        }&text=${japSent}&source_lang=JA&target_lang=EN`
      )
      .then((res) => {
        setEnDeeplSent(res.data.translations[0].text);
        setEnDeeplSentActive(true);
      });

    axios
      .post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: `Translate this into English: ${japSent}`,
          temperature: 0.3,
          max_tokens: 100,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GPT_AUTH_KEY}`,
          },
        }
      )
      .then((res) => {
        setEnGptSent(res.data.choices[0].text);
        setEnGptSentActive(true);
      });
  };

  return (
    <>
      <div className="App">
        <Header />
        <br />
        <InputSentence
          japSent={japSent}
          onClickTransrate={onClickTransrate}
          onClickFetchData={onClickFetchData}
        />
        <br />
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
          </div>
        ) : (
          ""
        )}

        {enSentActive && enDeeplSentActive && enGptSentActive ? (
          <div>
            <GoogleTrans googleSent={enSent} setLoading={setLoading} />
            <DeepL deeplSent={enDeeplSent} />
            <GptTrans gptSent={enGptSent} />
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

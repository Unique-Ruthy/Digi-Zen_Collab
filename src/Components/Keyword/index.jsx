import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import "./keyword.css";

const KeyWord = () => {
  return (
    <div className="nameWrapper">
      <div >
        <div className="keyName">
          <p>Keywords</p>
        </div>
        <div className="searchName">
          <p>Search using keywords</p>
        </div>
      </div>

      <div className="totalIcon">
        <button type="submit" className="searchIcon">
          <LuSearch />
        </button>
        <input type="text" placeholder="texting scam" className="inputHolder" />
        <button type="submit" className="cancelIcon">
          <RxCross2 />
        </button>
      </div>

      <div className="keyWrapper">
        <ul className="keyLists">
          <li className="keyList">children</li>
          <li className="keyList">safety</li>
          <li className="keyList">scam</li>
          <li className="keyList">digital</li>
          <li className="keyList">citizens</li>
          <li className="keyList">test</li>
          <li className="keyList">privacy</li>
          <li className="keyList">data</li>
          <li className="keyList">settings</li>
          <li className="keyList">security</li>
          <li className="keyList">gaming</li>
          <li className="keyList">attacks</li>
          <li className="keyList">device</li>
          <li className="keyList">phishing</li>
          <li className="keyList">virus</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyWord;
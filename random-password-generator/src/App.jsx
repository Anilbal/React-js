import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [length, setLength] = useState(8);

  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "0123456789";
    if (isCharacter) str += "!@#$%^&*()+_{}[]";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumber, isCharacter, setPassword]);

  //useRef hook
  const passwordRef=useRef(null)

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isCharacter, passwordGenerator]);
  return (
    <>
      <div className=" bg-black h-screen text-[#fff] p-10 flex flex-col items-center gap-10">
        <h1 className="text-5xl ">Password Generator</h1>
        <div className="w-[600px] h-12 text-2xl flex">
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
            className="outline-none h-full w-2/3 px-4 text-black"
          />
          <button onClick={copyToClipboard} className="bg-blue-800 h-full w-1/3">Copy</button>
        </div>
        <div>
          <div className="flex gap-10 text-2xl">
            <div className="flex items-center gap-5">
              <input
                type="range"
                name="range"
                id="range"
                value={length}
                min={6}
                max={100}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="range">Length: {length}</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="num"
                id="num"
                className="cursor-pointer h-[20px] w-[20px]"
                defaultChecked={isNumber}
                onChange={() => {
                  setIsNumber((prev) => !prev);
                }}
              />
              <label htmlFor="num">Number</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="char"
                id="char"
                className="cursor-pointer h-[20px] w-[20px]"
                defaultChecked={isNumber}
                onChange={() => {
                  setIsCharacter((prev) => !prev);
                }}
              />
              <label htmlFor="char">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

import React from "react";
import { createContext } from "react";

// state를 담아서 전달 (보통 이처럼 필요한 기능만을 들고온다.)
export const StateContext = createContext(null);

// set을 담아서 전달
export const SetContext = React.createContext(null);
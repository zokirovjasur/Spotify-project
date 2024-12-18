import { createContext, useReducer } from "react";
import {
  Adele,
  LanaMusic,
  Mockingbird,
  Twenty,
  Twopac,
  Weeknd,
} from "./assets";

const initialState = {
  artists: [],
  audio: null,
  action: "pause",
  albums: [
    {
      title: "The Avairy",
      artist: "Galantis",
      year_released: 2017,
      songs: [
        {
          title: "Hey Alligator",
          length: 197,
        },
        {
          title: "True Feeling",
          length: 214,
        },
        {
          title: "Written in the scars",
          length: 194,
        },
        {
          title: "No Money",
          length: 185,
        },
      ],
    },
    {
      title: "Kolony",
      artist: "Steve Aoki",
      year_released: 2017,
      songs: [
        {
          title: "Lit",
          length: 150,
        },
        {
          title: "Without you",
          length: 207,
        },
        {
          title: "Been Ballin",
          length: 180,
        },
        {
          title: "How Else",
          length: 152,
        },
      ],
    },
  ],
  currentTime: 0,
  audio_id: null,
  musics: [
    {
      id: "7dGJo4pcD2V6oG8kP0tJRR",
      src: Mockingbird,
      title: "Mockingbird",
      time: 251,
    },
    {
      id: "00FQb4jTyendYWaN8pK0wa",
      src: LanaMusic,
      title: "Mountain dew",
      time: 226,
    },
    {
      id: "4dpARuHxo51G3z768sgnrY",
      src: Adele,
      title: "Rolling in the deep",
      time: 228,
    },
    {
      id: "1ZwdS5xdxEREPySFridCfh",
      src: Twopac,
      title: "All eyes on me",
      time: 307,
    },
    {
      id: "3YQKmKGau1PzlVlkL1iodx",
      src: Twenty,
      title: "Heathens",
      time: 195,
    },
    {
      id: "1Xyo4u8uXC1ZmMpatF05PJ",
      src: Weeknd,
      title: "Starboy",
      time:230,
    },
  ]
};

export const Context = createContext();

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "SET_ARTISTS":
      return {...state, artists: payload}
    case "SET_AUDIO":
      return {...state, audio: payload.audio, audio_id: payload.id}
    case "SET_ACTION":
      return {...state, action: payload}
    case "SET_CURRENTTIME":
      return {...state, currentTime: payload}
    default:
      return {state}
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;

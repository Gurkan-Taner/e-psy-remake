"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [joinedAudio, setJoinedAudio] = useState(null);
  const [leavedAudio, setLeavedAudio] = useState(null);
  const [userState, setUserState] = useState({
    mode: "",
    listenerSubject: [],
    therapieSubject: "",
    isWaiting: false,
    conversationSubject: "",
    joined: false,
    partnerLeft: false,
  });

  const setMode = (mode) => {
    setUserState((prev) => ({ ...prev, mode }));
  };

  const setJoined = (val) => {
    setUserState((prev) => ({ ...prev, joined: val }));
  };

  const setTherapieSubject = (subject) => {
    setUserState((prev) => ({ ...prev, therapieSubject: subject }));
  };

  const setListenerSubject = (updateFn) => {
    setUserState((prev) => ({
      ...prev,
      listenerSubject: updateFn(prev.listenerSubject || []),
    }));
  };

  const toggleWaiting = (val) => {
    setUserState((prev) => ({ ...prev, isWaiting: val }));
  };

  const setConversationSubject = (subject) => {
    setUserState((prev) => ({ ...prev, conversationSubject: subject }));
  };

  const setPartnerLeft = (val) => {
    setUserState((prev) => ({ ...prev, partnerLeft: val }));
  };

  useEffect(() => {
    setJoinedAudio(new Audio("/audio/joined.mp3"));
    setLeavedAudio(new Audio("/audio/leaved.mp3"));
  }, []);

  return (
    <AppContext.Provider
      value={{
        userState,
        setUserState,
        setMode,
        setTherapieSubject,
        toggleWaiting,
        setListenerSubject,
        setConversationSubject,
        setJoined,
        joinedAudio,
        leavedAudio,
        setPartnerLeft,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

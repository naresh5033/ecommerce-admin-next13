"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  if (!isMounted) {//since we re gon use this in the server side, and we don't wanna ve any dehyderation issue, so if its not mounted - means if we re in ssr then return null.
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
}

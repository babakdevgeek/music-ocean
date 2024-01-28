"use client";
import { ThemeProvider as Provider } from "next-themes";
import React, { PropsWithChildren } from "react";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <Provider>{children}</Provider>;
};

export default ThemeProvider;

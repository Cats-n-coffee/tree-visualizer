import ThemeProvider from "./ThemeProvider";
import { AppProps } from "../types";

export default function AppProvider({ children }: AppProps) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}

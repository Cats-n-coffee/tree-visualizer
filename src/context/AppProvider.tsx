import { AppProps } from "../@types/types";
import ThemeProvider from "./ThemeProvider";

export default function AppProvider({ children }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider>{children}</ThemeProvider>
    </React.Fragment>
  );
}

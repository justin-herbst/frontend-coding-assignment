import { PropsWithChildren } from "react";

export const useTranslations = () => (key: string, d?: any) => key;
export const useFormatter = () => ({
  number: (value: number): string => String(value),
  dateTime: (value: Date): string => String(value),
  // ... other formatters
});
export const NextIntlClientProvider = ({ children }: PropsWithChildren) => (
  <>{children}</>
);

type ClarityWindow = Window & {
  clarity?: (command: "event", name: string) => void;
};

export function trackEvent(name: string) {
  if (typeof window === "undefined") {
    return;
  }

  const clarity = (window as ClarityWindow).clarity;

  if (typeof clarity === "function") {
    clarity("event", name);
  }
}

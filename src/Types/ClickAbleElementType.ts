export type ClickAbleElement = {
  element: HTMLElement;
  handleClick: (event: MouseEvent) => void;
  bindEvent: () => void;
}
export abstract class UiComponent<T extends HTMLElement> {
  templateEl: HTMLTemplateElement;
  element: T;

  constructor(templateId: string) {
    this.templateEl = document.querySelector(templateId) as HTMLTemplateElement;
    const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;
    this.element = clone.firstElementChild as T;
  }

  abstract setup(): void;

  mount(selector: string) {
    const targetEl = document.querySelector(selector)!;
    targetEl.insertAdjacentElement("beforeend", this.element);
  }
}
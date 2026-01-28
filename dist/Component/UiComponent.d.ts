export declare abstract class UiComponent<T extends HTMLElement> {
    templateEl: HTMLTemplateElement;
    element: T;
    constructor(templateId: string);
    abstract setup(): void;
    mount(selector: string): void;
}
//# sourceMappingURL=UiComponent.d.ts.map
/* The 404 spline is a [data-component="spline"] handled by the shared component
   manager, so this template renderer no longer manages it directly. */
export default class NotFound {
    constructor(element) {
        this.element = element;
    }

    destroy() {}
}

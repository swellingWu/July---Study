function Render(obj, root) {
    // Render 运行时渲染 DOM 元素
    const el = document.createElement(obj.tag);
    if (typeof obj.children === 'string') {
        const text = document.createTextNode(obj.children);
        el.appendChild(text);
    } else {
        obj.children.forEach((child) => Render(child, el));
    }

    //将元素添加到 root
    root.appendChild(el);
}
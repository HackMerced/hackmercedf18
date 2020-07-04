import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Form from './Form';

let container: HTMLDivElement;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

it('renders contact us form', () => {
    act(() => {
        render(<Form formTitle="Message Us" askCompany={false} />, container);
    });
    expect(container.textContent).toContain('Message Us');
});

it('renders sponsor us form', () => {
    act(() => {
        render(<Form formTitle="Sponsor Us" askCompany={true} />, container);
    });
    expect(container.textContent).toContain('Sponsor Us');
});
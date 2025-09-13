import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/link', () => ({ default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a> }));
vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

import { Navbar } from '@/components/Navbar';

describe('Navbar', () => {
  it('marca "Inicio" como activo cuando pathname es "/"', () => {
    render(<Navbar />);
    const inicio = screen.getByText('Inicio');
    expect(inicio.className).toMatch(/bg-white\/10/);
  });
});

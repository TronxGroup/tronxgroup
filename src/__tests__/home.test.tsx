import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/link', () => ({ default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a> }));
vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

import Home from '@/app/page';

describe('Home Page', () => {
  it('renderiza el título Tronx Group y CTA', () => {
    render(<Home />);
    expect(screen.getByText('Tronx Group')).toBeInTheDocument();
    expect(screen.getByText('Agenda una reunión')).toBeInTheDocument();
  });
});

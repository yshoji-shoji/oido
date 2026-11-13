import { ReactNode } from 'react';

type Props = {
  id: string;
  label: string;
  children: ReactNode;
};

export const Section = ({ id, label, children }: Props) => (
  <section id={id} className="section" aria-labelledby={`${id}-label`}>
    <h2 id={`${id}-label`} className="section-label">
      {label}
    </h2>
    <div className="section-body">{children}</div>
  </section>
);

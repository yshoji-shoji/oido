type Props = {
  style: React.CSSProperties | undefined;
};

export const Footer = ({ style }: Props) => (
  <footer className="footer" style={style}>
    <div className="footer-logo">OidO</div>
    <div className="footer-symbol">§</div>
  </footer>
);

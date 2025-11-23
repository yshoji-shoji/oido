type Props = {
  style: React.CSSProperties | undefined
}

export const Footer = ({ style }: Props) => (
  <footer id="footer" style={style}>
    <div className="container">
      <div className="logo">OidO</div>
      <div className="symbol">§</div>
    </div>
  </footer>
)

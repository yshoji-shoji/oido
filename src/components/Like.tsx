import { random } from "../utils/random"

type Props = {
  filter: () => void
}

export const Like = ({ filter }: Props) => {
  const count = random(1000)

  return (
    <section className="like">
      <h2>Love me tender</h2>
      <div id="like-button" className="like-icon" onClick={() => filter()}>
        <img src="./img/thumbs-up.svg" alt="" />
      </div>
      <div id="like-count-display" className="like-count-display">
        {count}
      </div>
    </section>
  )
}

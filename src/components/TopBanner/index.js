import * as React from "react"
import { Link } from "gatsby"
import Games from "../../images/banner_game.png"
import * as styles from "./index.module.scss"

const rentType = ["Lands", "Heros", "Shoes"]

const TopBanner = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [index])

  const showType = React.useMemo(() => {
    return rentType[index % 3]
  }, [index])

  return (
    <section className={styles.topBanner}>
      <div>
        <h2>
          Rent <span>{showType}</span>
        </h2>
        <p>
          World’s first NFT rental protocol that is built to maximize utility of
          NFTs
        </p>
        <span className={styles.bannerEntry}>Enter APP</span>
      </div>
      <img src={Games} alt="Game_Example" />
    </section>
  )
}

export default TopBanner

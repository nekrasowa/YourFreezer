import styles from '../BasicContent/BasicContent.module.scss'
import globalStyles from '../globalStyles.module.scss'

export const defineColor = (gettingNumb, minForYellow, minForRed) => {
  if (minForYellow <= gettingNumb && gettingNumb < minForRed) {
    return `${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement} ${globalStyles.FreezerOneElement_yellow}`
  }
  if (gettingNumb >= minForRed) {
    return `${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement} ${globalStyles.FreezerOneElement_red}`
  }
  return `${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement}`

}



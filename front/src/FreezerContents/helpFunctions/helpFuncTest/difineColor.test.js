import { defineColor } from '../difineColor';
import styles from '../../BasicContent/BasicContent.module.scss'
import globalStyles from '../../../globalStyles.module.scss'

test('return right style string for basic', () => {
  expect(defineColor(0, 5, 9)).toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement}`)
  expect(defineColor(-2, 5, 9)).toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement}`)
  expect(defineColor(4, 5, 9)).toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement}`)
  expect(defineColor(5, 5, 9)).not.toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement}`)
  
  expect(defineColor(5, 5, 9)).toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement} ${globalStyles.FreezerOneElement_yellow}`)
  expect(defineColor(7, 5, 9)).toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement} ${globalStyles.FreezerOneElement_yellow}`)
  expect(defineColor(9, 5, 9)).not.toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement} ${globalStyles.FreezerOneElement_yellow}`)
  
  expect(defineColor(9, 5, 9)).toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement} ${globalStyles.FreezerOneElement_red}`)
  expect(defineColor(11, 5, 9)).toEqual(`${globalStyles.FreezerOneElement} ${styles.BasicContent__basicElement} ${globalStyles.FreezerOneElement_red}`)
})

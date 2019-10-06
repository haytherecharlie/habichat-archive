import { getState } from 'src/services/redux'

export const getColor = () => getState().universal.colorTheme

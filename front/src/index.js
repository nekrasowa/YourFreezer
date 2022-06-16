import { goods, deleteElementFromList } from './state'
import { rerenderEntireTree } from './render'

rerenderEntireTree(goods, deleteElementFromList)
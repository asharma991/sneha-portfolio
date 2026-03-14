import { mount } from 'svelte'
import './app.css'
import MakingSensePage from './pages/MakingSensePage.svelte'

const app = mount(MakingSensePage, {
  target: document.getElementById('app')!,
})

export default app

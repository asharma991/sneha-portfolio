import { mount } from 'svelte'
import './app.css'
import BitsPage from './pages/BitsPage.svelte'

const app = mount(BitsPage, {
  target: document.getElementById('app')!,
})

export default app

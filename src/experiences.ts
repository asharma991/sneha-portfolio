import { mount } from 'svelte'
import './app.css'
import ExperiencesPage from './pages/ExperiencesPage.svelte'

const app = mount(ExperiencesPage, {
  target: document.getElementById('app')!,
})

export default app

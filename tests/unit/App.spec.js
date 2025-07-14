import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders Task Manager title', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('h1').text()).toBe('Task Manager')
  })

  it('adds a task to the list', async () => {
    const wrapper = shallowMount(App)
    const input = wrapper.find('input[type="text"]')
    await input.setValue('New Task')
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.tasks).toHaveLength(3)
    expect(wrapper.vm.tasks[2].name).toBe('New Task')
  })

  it('toggles task completion', async () => {
    const wrapper = shallowMount(App)
    await wrapper.find('span').trigger('click')
    expect(wrapper.vm.tasks[0].completed).toBe(false)
  })

  it('deletes a task from the list', async () => {
    const wrapper = shallowMount(App)
    await wrapper.findAll('button')[0].trigger('click')
    expect(wrapper.vm.tasks).toHaveLength(1)
  })
})

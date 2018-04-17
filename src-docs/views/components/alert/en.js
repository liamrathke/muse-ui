import description from './README_EN.md'

export default {
  description,
  simpleExample: 'Basic Example',
  simpleExampleDesc: 'There are four types of alerts: success, info, warning, and error. By default, these alerts are accompanied by a descriptive icon that conveys the alert\'s purpose to the user.',
  defineExample: 'Customized Example',
  defineExampleDesc: 'An alert can be customized by adding a close button or by changing/removing the descriptive icon itself.',
  props: {
    type: 'The alert\'s style: success, info, warning, or error',
    closeable: 'Whether the alert can be closed or not',
    showIcon: 'Whether the alert\'s icon will be shown or not'
  },
  events: {
    close: 'Fired when the alert is closed'
  },
  slots: {
    default: 'The alert\'s text content',
    description: 'The alert\'s title',
    icon: 'The alert\'s icon, from the Material Icons stylesheet',
    close: 'If closeable, the alert\'s close button text'
  }
}

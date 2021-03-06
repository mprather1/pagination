import App from './App'

global.jQuery = require('jquery')
require('bootstrap')
require('./public/css/style.scss')

_.extend(Backbone.Validation.callbacks, {
  valid: function (view, attr, selector) {
    const $el = view.$('[name=' + attr + ']')
    const $group = $el.closest('.form-group')

    $group.removeClass('has-error')
    $group.find('.help-block').html('').addClass('hidden')
  },
  invalid: function (view, attr, error, selector) {
    const $el = view.$('[name=' + attr + ']')
    const $group = $el.closest('.form-group')
    const helpBlock = $group.find('.help-block')

    $group.addClass('has-error')

    helpBlock.html(error).removeClass('hidden')
  }
})

const app = new App()
app.start()

export default app

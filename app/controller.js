import Marionette from 'marionette'
import Models from './collections/Models'
import ModelsView from './views/ModelsView'
import FormView from './views/FormView'
import Pagurbate from 'pagurbate'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
  },

  page: function (id) {
    const app = this.app

    this.models = new Models({ id: id })

    const modelsView = new ModelsView({
      collection: this.models
    })

    this.models.fetch({
      success: function (data) {
        app.view.showChildView('main', modelsView)
        app.view.showChildView('footer', new Pagurbate({ pageData: data.pageData}))
      },

      error: function (err) {
        console.log(err)
      }
    })
  },

  formRoute: function () {
    this.app.view.showChildView('main', new FormView({ collection: this.models }))
  }
})

export default Controller

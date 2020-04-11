import find from 'lodash/find'


class Registry {
  widgets = []

  put(widget) {
    if (this.has(widget.type)) {
      throw new Error(`Widget ${widget.type} already has exist`)
    }

    this.widgets.push(widget)
  }

  get(type) {
    const widget = this.find(type)
    if (!this.has(type)) {
      throw new Error(`Widget ${type} is not exist`)
    }

    return widget
  }

  getAll() {
    return this.widgets
  }

  has(type) {
    return !!this.find(type)
  }

  find(type) {
    return find(this.widgets, ['type', type])
  }
}

export default new Registry()

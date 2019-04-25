import localForage from 'localforage';

const storageService  = class StorageService{

  dasbhoardStore = null

  constructor() {
    this.dasbhoardStore = localForage.createInstance({ name: "dashboardStore" , storeName: "dashboards" });
  }

  setDashboard(id, data){
    return this.dasbhoardStore.setItem(id, data)
  }

  getDashboard(id) {
    return this.dasbhoardStore.getItem(id)
  }

  getDashboards() {
    let dashes = []
    return this.dasbhoardStore.iterate((value, key) => {
      dashes.push({key: key, value: value})
    }).then(complete => {
      return dashes
    })
  }

  removeDashboard(id) {
    return this.dasbhoardStore.removeItem(id)
  }
}

export default storageService
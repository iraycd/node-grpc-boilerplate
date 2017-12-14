import {list} from './service/address-book'

const addressBookRoute = {
  list: list
}

const RouteConfig = app => {
  app.use({
    AddressBookService: addressBookRoute
  })
}

export default RouteConfig

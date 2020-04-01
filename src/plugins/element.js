/* eslint-disable standard/object-curly-even-spacing */
import Vue from 'vue'
import { Table, Pagination, Message, MessageBox, Breadcrumb, Tabs, TabPane, Button } from 'element-ui'

Vue.use(Table)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Button)

// 进行全局挂载：
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

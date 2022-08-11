import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

router.beforeEach((to, from, next) =>{

    let language = to.params.lang;
    if(!language){
        language = 'en'
    }

    i18n.locale = language

    console.log(i18n.locale)
    next()
})

createApp(App).use(i18n).use(router).mount('#app')





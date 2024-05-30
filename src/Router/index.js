import {createRouter,createWebHistory} from "vue-router";
import Rick_mortay_home from "../components/Rick_mortay_home.vue";
import Character_page from "../components/Character_page.vue"
import Episode from "../components/Episode.vue";
import Location from "../components/Location.vue"
import Character_Details from '../components/Character_Details.vue'
import Location_Details from '../components/Location_Details.vue'
import Episodes_Details from '../components/Episodes_Details.vue'
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
       {
         path:"/",
         name:"Home",
         component:Rick_mortay_home
       },
       {
        path:"/character/",
        name:"character",
        component:Character_page
      },
      {
        path:"/episode/",
        name:"episode",
        component:Episode 
      },
      {
        path:"/location/",
        name:"location",
        component:Location
      },
      {
        path:"/characters/:id",
        name:"characterdetails",
        component:Character_Details
      },
      {
        path:"/locations/:id",
        name:"LocationDetails",
        component:Location_Details
      },
      {
        path:"/episodes/:id",
        name:"EpisodesDetails",
        component:Episodes_Details
      }
    ]
})
export default router; 
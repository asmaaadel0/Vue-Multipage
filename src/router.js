import { createRouter, createWebHistory } from "vue-router";

import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./pages/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./pages/NotFound.vue";
import TeamsFooter from "./pages/TeamsFooter.vue";
import UsersFooter from "./pages/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/", redirect: "/teams" },
    // { path: "/teams", component: TeamsList },
    {
      name: "teams",
      path: "/teams",
      alias: "/",
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log("user before enter");
        console.log(to, from);
        next();
      },
    },

    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, saverPosition) {
    // console.log(to, from, saverPosition);
    if (saverPosition) {
      return saverPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach(function (to, from, next) {
  console.log("Global beforeEach");
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log("needs auth!");
    next();
  } else {
    next();
  }
  //   if (to.name === "team-member") {
  //     next();
  //   } else {
  //     next({ name: "team-members", params: { teamId: "t2" } });
  //   }
});

router.afterEach(function (to, from) {
  console.log("global after Each");
  console.log(to, from);
});
export default router;

<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

import TheNavigation from './components/nav/TheNavigation.vue';


export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'asmaa adel', role: 'Engineer' },
        { id: 'u2', fullName: 'alaa emad', role: 'Engineer' },
        { id: 'u3', fullName: 'esraa khaled', role: 'Engineer' },
        { id: 'u4', fullName: 'hasnaa mohamed', role: 'Consultant' },
        { id: 'u5', fullName: 'mai adham', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
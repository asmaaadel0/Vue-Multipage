<template>
  <!-- <ul id="butt">
    <li id="butt2">
      <button @click="confirmInput">Confirm</button>
    </li>
    <li id="butt2">
      <button @click="saveChanges">Save Changes</button>
    </li>
  </ul> -->
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("userList before Route Enter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('userList before Route Leave')
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const result = confirm('Are you sure? you got unsaved changes!');
      next(result);
    }

  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
#butt {
  list-style: none;
  margin: 1.5rem;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: rgb(3, 3, 126);
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

button:hover,
button:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
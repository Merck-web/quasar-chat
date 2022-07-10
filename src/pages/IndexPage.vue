<template>
  <q-page padding>
    <AccessView v-if="!isAuthenticated" />
    <div v-else>
      <ViewActiveUsers />
      <ChatView />
    </div>
  </q-page>
</template>

<script>
import AccessView from "../components/AccessView.vue";
import ViewActiveUsers from "../components/ViewActiveUsers.vue";
import ChatView from "../components/ChatView.vue";
import { useAuth } from "@vueuse/firebase";
import { provide, ref } from "vue";
import { auth } from "boot/firebase";

export default {
  name: "IndexPage",
  components: {
    AccessView,
    ViewActiveUsers,
    ChatView,
  },
  setup() {
    const { isAuthenticated } = useAuth(auth.auth);

    const uidSeleccionado = ref("");
    provide("uidSeleccionado", uidSeleccionado);

    return {
      isAuthenticated,
    };
  },
};
</script>

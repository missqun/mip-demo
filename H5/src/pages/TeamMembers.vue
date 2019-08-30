<template>
  <div class='g-inherit m-article p-members'>
    <x-header class="m-tab" :left-options="{backText: ' '}">
      <h1 class="m-tab-top">群成员</h1>
      <a slot="left"></a>
    </x-header>
    <div class="m_member_box">
    <team-member :teamId='teamId' :advanced='true' :showAllMode='true'></team-member>
    </div>
  </div>
</template>

<script>
import config from '../configs'
import TeamMember from './components/TeamMember.vue'

export default {
  computed:{
    teamId(){
      return this.$route.params.teamId
    },
  },
  components:{
    TeamMember
  }
}
</script>

<style scoped>
  .p-members{
    background-color: #e6ebf0;
    
  }
  .m_member_box{
    margin-top:3.7rem;
  }
</style>

<template>
  <div class="space-x-2 py-4 flex">
    <SocialBtn :href="META.EMAIL_URL">Email</SocialBtn>
    <SocialBtn :href="META.GITHUB_URL">
      <GithubIconVue width="24" height="24" />
    </SocialBtn>
    <SocialBtn :href="META.LINKEDIN_URL">
      <LinkedinIconVue width="24" height="24" />
    </SocialBtn>
    <SocialBtn :href="META.TWITTER_URL">
      <TwitterIconVue width="24" height="24" />
    </SocialBtn>
    <SocialBtn :href="META.INSTAGRAM_URL">
      <InstagramIconVue width="24" height="24" />
    </SocialBtn>
  </div>
</template>

<script>
import GithubIconVue from "./icons/GithubIcon.vue";
import LinkedinIconVue from "./icons/LinkedinIcon.vue";
import TwitterIconVue from "./icons/TwitterIcon.vue";
import InstagramIconVue from "./icons/InstagramIcon.vue";
import SocialBtn from "./SocialBtn.vue";
import META from "./meta";

export default {
  components: {
    GithubIconVue,
    LinkedinIconVue,
    TwitterIconVue,
    InstagramIconVue,
    SocialBtn,
  },
  data() {
    return {
      META,
    };
  },
};
</script>

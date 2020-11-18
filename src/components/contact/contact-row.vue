<template>
  <div class="contact-row">
    <div class="contact-col">
      <base-title>Drop us a Message</base-title>
      <base-text class="text-contact">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer
      </base-text>
      <div class="contact-data-row">
        <contact-data-block
          v-for="dataset in data"
          :key="dataset.id"
          :data="dataset"
        >
        </contact-data-block>
      </div>
    </div>
    <div class="contact-col img">
      <img
        class="img"
        :src="require('@/assets/img/news/news_id1_1.png')"
        alt="img-contact"
      />
    </div>
    <div class="contact-col">
      <base-title>Send Message</base-title>
      <img
        class="img"
        :src="require('@/assets/img/contact/cart.png')"
        alt=""
      />
    </div>
    <div class="contact-col">
      <contact-form></contact-form>
    </div>
  </div>
</template>

<script lang="ts">
import BaseTitle from "@/components/base/base-title.vue";
import BaseText from "@/components/base/base-text.vue";
import ContactDataBlock from "@/components/contact/base/contact-data-block.vue";
import ContactForm from "@/components/contact/base/contact-form.vue";
export default {
  name: "contact-row",
  components: {
    ContactForm,
    ContactDataBlock,
    BaseText,
    BaseTitle
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: "ADDRESS",
          text:
            "Mirpur New Bazar Road, Block-c, Dhaka-1210",
          img: require("@/assets/img/contact/metka.png"),
          alt: "metka"
        },
        {
          id: 2,
          title: "PHONE",
          text: "(732) 803-01 03, (732) 806-01 04",
          img: require("@/assets/img/contact/telephone.png"),
          alt: "phone"
        },
        {
          id: 3,
          title: "EMAIL",
          text: "smaple@gmail.com, otheremail@gmail.com",
          img: require("@/assets/img/contact/messages.png"),
          alt: "email"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.contact-row
    +row()
    +justify-content-between()
.contact-col
    +col()
    +size-lg(5)
    +size(12)
    +mb-rem(50px)
.contact-col.img
  +size-lg(5)
  +size(10)
.text-contact
    +lh-rem(20px)
    +size(8)
    +mb-rem(45px)
.contact-data-row
  +mt-rem(20px)
</style>
